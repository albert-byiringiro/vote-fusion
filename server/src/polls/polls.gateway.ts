import { BadRequestException, Logger, UseFilters, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { PollsService } from "./polls.service";
import { Namespace } from "socket.io";
import { SocketWithAuth } from "./types";
import { WsCatchAllFilter } from "src/exceptions/ws-catch-all-filter";
import { GatewayAdminGuard } from "./gateway-admin.guard";
import { NominationDto } from "./polls.dto";

@UsePipes(new ValidationPipe())
@UseFilters(new WsCatchAllFilter())
@WebSocketGateway({
    namespace: 'polls',
})
export class PollsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private readonly logger = new Logger(PollsGateway.name)

    constructor(private readonly pollsService: PollsService){}

    @WebSocketServer() io: Namespace;

    // Gateway initialized (provided in module and instantiated)
    afterInit(): void {
        this.logger.log(`Websocket Gateway initialized.`)
    }

    async handleConnection(client: SocketWithAuth) {
        const sockets = this.io.sockets

        this.logger.debug(`Socket connected with userID: ${client.userID}, pollID: ${client.pollID}, and name: "${client.name}`)

        this.logger.log(`WS Client with id: ${client.id} connected!`);
        this.logger.debug(`Number of connected sockets: ${sockets.size}`)

        const roomName = client.pollID
        await client.join(roomName)

        const connectedClients = this.io.adapter.rooms?.get(roomName)?.size ?? 0;

        this.logger.debug(`userID: ${client.userID} joined room with name: ${roomName}`)

        this.logger.debug(`Total Clients connected to room '${roomName}': ${connectedClients}`)

        const updatedPoll = await this.pollsService.addParticipant({
            pollID: client.pollID,
            userID: client.userID,
            name: client.name
        })

        this.io.to(roomName).emit('poll_updated', updatedPoll)
    }

    async handleDisconnect(client: SocketWithAuth) {
        const sockets = this.io.sockets;

        const { userID, pollID } = client
        const updatedPoll = await this.pollsService.removeParticipant(pollID, userID)

        const roomName = client.pollID
        const clientCount = this.io.adapter.rooms?.get(roomName)?.size ?? 0

        this.logger.log(`Disconnected socket id: ${client.id}`)
        this.logger.debug(`Number of connected sockets: ${sockets.size}`)
        this.logger.debug(`Total clients connected to room '${roomName}': ${clientCount}`)

        if (updatedPoll) {
            this.io.to(pollID).emit('poll_updated', updatedPoll)
        }

    }

    @UseGuards(GatewayAdminGuard)
    @SubscribeMessage('remove_participant')
    async removeParticipant(
        @MessageBody('id') id:string,
        @ConnectedSocket() client: SocketWithAuth
    ) {
        this.logger.debug(`Attempting to remove participant ${id} from poll ${client.pollID}`)

        const updatedPoll = await this.pollsService.removeParticipant(client.pollID, id)

        this.io.to(client.pollID).emit('poll_updated', updatedPoll)
    }

    @SubscribeMessage('nominate')
    async nominate(
        @MessageBody() nomination: NominationDto,
        @ConnectedSocket() client: SocketWithAuth,
    ): Promise<void> {
        this.logger.debug(`Attempting to add nomination for user ${client.userID} to poll ${client.pollID}\n${nomination.text}`)

        const updatedPoll = await this.pollsService.addNomination({
            pollID: client.pollID,
            userID: client.userID,
            text: nomination.text,
        })

        this.io.to(client.pollID).emit('poll_updated', updatedPoll)
    }
}
import { BadRequestException, Logger, UseFilters, UsePipes, ValidationPipe } from "@nestjs/common";
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { PollsService } from "./polls.service";
import { Namespace } from "socket.io";
import { SocketWithAuth } from "./types";
import { WsCatchAllFilter } from "src/exceptions/ws-catch-all-filter";

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

        const connectedClients = this.io.adapter.rooms.get(roomName).size;

        this.logger.debug(`userID: ${client.userID} joined room with name: ${roomName}`)

        this.logger.debug(`Total Clients connected to room '${roomName}': ${connectedClients}`)
    }

    handleDisconnect(client: SocketWithAuth) {
        const socket = this.io.sockets;

        const { userID, pollID } = client

        // these will only be available via actual socket.io client
        // and not with Postman
        this.logger.debug('in handleDisconnect', userID, pollID)

        this.logger.log(`Disconnected socket id: ${client.id}`)
        this.logger.debug(`Number of connected sockets: ${socket.size}`)

        // TODO - remove client from poll and send `participants_updated` event to remaining clients
    }

    @SubscribeMessage('test')
    async test() {
        throw new BadRequestException({ test: 'test'})
    }
}
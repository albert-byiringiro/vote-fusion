import { Logger } from "@nestjs/common";
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer, WsException } from "@nestjs/websockets";
import { PollsService } from "./polls.service";
import { Namespace } from "socket.io";
import { SocketWithAuth } from "./types";

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

    handleConnection(client: SocketWithAuth) {
        const sockets = this.io.sockets

        this.logger.debug(`Socket connected with userID: ${client.userID}, pollID: ${client.pollID}, and name: "${client.name}`)

        this.logger.log(`WS Client with id: ${client.id} connected!`);
        this.logger.debug(`Number of connected sockets: ${sockets.size}`)

        this.io.emit('hello', `from ${client.id}`)
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
        throw new WsException({ field: 'field', message: 'You screwed up.'})
    }
}
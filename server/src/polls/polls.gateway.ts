import { Logger } from "@nestjs/common";
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { PollsService } from "./polls.service";
import { Namespace, Socket } from "socket.io";

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

    handleDisconnect(client: Socket) {
        const socket = this.io.sockets;

        this.logger.log(`WS Client with id: ${client.id} connected!`)
        this.logger.debug(`Number of connected sockets: ${socket.size}`)
    }

    handleConnection(client: Socket) {
        throw new Error('Method not implemented')
    }
}
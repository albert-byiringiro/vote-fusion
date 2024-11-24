import { Logger } from "@nestjs/common";
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, WebSocketGateway } from "@nestjs/websockets";
import { PollsService } from "./polls.service";
import { Socket } from "socket.io";

@WebSocketGateway({
    namespace: 'polls',
})
export class PollsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private readonly logger = new Logger(PollsGateway.name)

    constructor(private readonly pollsService: PollsService){}

    // Gateway initialized (provided in module and instantiated)
    afterInit(): void {
        this.logger.log(`Websocket Gateway initialized.`)
    }

    handleDisconnect(client: Socket) {
        throw new Error('Mehtod not implemented')
    }

    handleConnection(client: Socket) {
        throw new Error('Method not implemented')
    }
}
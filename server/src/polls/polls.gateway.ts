import { Logger } from "@nestjs/common";
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, WebSocketGateway } from "@nestjs/websockets";
import { PollsService } from "./polls.service";

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

    handleDisconnect(client: any) {
        throw new Error('Mehtod not implemented')
    }

    handleConnection(client: any, ...args: any[]) {
        throw new Error('Method not implemented')
    }
}
import { Logger } from "@nestjs/common";
import { OnGatewayInit } from "@nestjs/websockets";
import { PollsService } from "./polls.service";

export class PollsGateway implements OnGatewayInit {
    private readonly logger = new Logger(PollsGateway.name)

    constructor(private readonly pollsService: PollsService){}

    // Gateway initialized (provided in module and instantiated)
    afterInit(): void {
        this.logger.log(`Websocket Gateway initialized.`)
    }
}
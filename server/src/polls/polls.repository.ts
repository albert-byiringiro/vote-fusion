import { Inject, Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import IORedis, { Redis } from "ioredis";

@Injectable()
export class PollsRepository {
    // to use time-to-live from configuration
    private readonly ttl: string
    private readonly logger = new Logger(PollsRepository.name)

    constructor(
        configService: ConfigService,
        @Inject(IORedis) private readonly redisClient: Redis
    ){
        this.ttl = configService.get('POLL_DURATION')
    }
}
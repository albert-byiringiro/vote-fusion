import { DynamicModule, Module } from "@nestjs/common";
import Redis, { RedisOptions } from "ioredis";

type RedisModuleOptions = {
    connectionOptions: RedisOptions;
    onClientReady?: (client: Redis) => void
}

@Module({})
export class RedisModule {
    static async registerAsync({
        useFactory,
        imports,
        inject
    }: RedisModuleOptions): Promise<DynamicModule> {
        return {
            module: RedisModule,
            imports: [],
            providers: [],
            exports: []
        }
    }
}
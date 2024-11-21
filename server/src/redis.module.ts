import { DynamicModule, FactoryProvider, Module, ModuleMetadata } from "@nestjs/common";
import IORedis from "ioredis";
import Redis, { RedisOptions } from "ioredis";

export const IORedisKey = 'IORedis'

type RedisModuleOptions = {
    connectionOptions: RedisOptions;
    onClientReady?: (client: Redis) => void
}

type RedisAsyncMOduleOptions = {
    useFactory: (...args: any[]) => Promise<RedisModuleOptions> | RedisModuleOptions
} & Pick<ModuleMetadata, 'imports'> & Pick<FactoryProvider, 'inject'>;

@Module({})
export class RedisModule {
    static async registerAsync({
        useFactory,
        imports,
        inject
    }: RedisAsyncMOduleOptions): Promise<DynamicModule> {
        const redisProvider = {
            provide: IORedisKey,
            useFactory: async (...args) => {
                const { connectionOptions, onClientReady } = await useFactory(...args)

                const client = await new IORedis(connectionOptions)

                onClientReady(client)
            },
            inject
        }
        
        return {
            module: RedisModule,
            imports: imports,
            providers: [redisProvider],
            exports: [redisProvider]
        }
    }
}
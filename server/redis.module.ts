import { DynamicModule, FactoryProvider, Module, ModuleMetadata } from "@nestjs/common";
import Redis, { RedisOptions } from "ioredis";

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
        return {
            module: RedisModule,
            imports: [],
            providers: [],
            exports: []
        }
    }
}
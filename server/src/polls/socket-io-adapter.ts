import { INestApplicationContext, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { IoAdapter } from "@nestjs/platform-socket.io";
import { ServerOptions } from "socket.io";
import { SocketWithAuth } from "./types";

export class SocketIOAdapter extends IoAdapter {
    private readonly logger = new Logger(SocketIOAdapter.name)

    constructor(
        private app: INestApplicationContext,
        private configService: ConfigService,
    ){
        super(app)
    }

    createIOServer(port: number, options?: ServerOptions) {
        const clientPort = parseInt(this.configService.get('CLIENT_PORT'))

        const cors = {
            origin: [
                `http://localhost:${clientPort}`,
                new RegExp(`/^http:\/\/192\.168\.1\.([1-9]|[1-9]\d):${clientPort}$/`),
            ]
        }

        this.logger.log('Configuring SocketIO server with custom CORS options', {
            cors,
        })

        const optionsWithCORS: ServerOptions = {
            ...options,
            cors
        }

        // we need to return this even though the signature says it returns void
        return super.createIOServer(port, optionsWithCORS)
    }
}

const createTokenMiddleware = (jwtService: JwtService, logger: Logger) => (socket: SocketWithAuth, next) => {
    // for postman testing support, fallback to token header
    const token = socket.handshake.auth.token || socket.handshake.headers['token']

    logger.debug(`Validating auth token before connection: ${token}`)

    try {
        const payload = jwtService.verify(token)
        socket.userID = payload.sub
        socket.pollID = payload.pollID
        socket.name = payload.name

        next()
    } catch (error) {
        next(new Error('FORBIDDEN'))
    }
}
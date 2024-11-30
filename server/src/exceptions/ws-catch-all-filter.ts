import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { SocketWithAuth } from "src/polls/types";

@Catch()
export class WsCatchAllFilter implements ExceptionFilter {
    catch(exception: Error, host: ArgumentsHost): void {
        const socket: SocketWithAuth = host.switchToWs().getClient()
    }
}
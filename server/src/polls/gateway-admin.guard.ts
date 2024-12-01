import { CanActivate, ExecutionContext, Injectable, Logger } from "@nestjs/common";
import { Observable } from "rxjs";
import { PollsService } from "./polls.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class GatewayAdminGuard implements CanActivate{
    
    private readonly logger = new Logger(GatewayAdminGuard.name)
    
    constructor(
        private readonly pollsService: PollsService,
        private readonly jwtService: JwtService,
    ){}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        throw new Error("Mehtod not implemented");  
    }
}
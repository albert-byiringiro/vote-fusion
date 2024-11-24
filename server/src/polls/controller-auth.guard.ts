import { CanActivate, Injectable, Logger } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class ControllerAuthGuard implements CanActivate {
    private readonly logger = new Logger(ControllerAuthGuard.name)
    constructor(private readonly jwtService: JwtService){}
}
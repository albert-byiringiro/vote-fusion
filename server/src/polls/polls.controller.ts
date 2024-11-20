import { Body, Controller, Logger, Post } from "@nestjs/common";
import { CreatePollDto, JoinPollDto } from "./polls.dto";
import { PollsService } from "./polls.service";

@Controller('polls')
export class PollsController{

    constructor(private pollsService: PollsService){}

    @Post()
    async create(@Body() createPollDto: CreatePollDto){
        const result = await this.pollsService.createPoll(createPollDto)

        return result
    }

    @Post('join')
    async join(@Body() joinPollDto: JoinPollDto){
        Logger.log('In join')

        return joinPollDto
    }

    @Post('rejoin')
    async rejoin(){
        Logger.log('Rejoin poll')
    }
}
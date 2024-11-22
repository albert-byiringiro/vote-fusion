import { Injectable, Logger } from "@nestjs/common";
import { CreatePollFields, JoinPollFields, RejoinPollFields } from "./types";
import { createPollID, createUserID } from "src/ids";
import { PollsRepository } from "./polls.repository";

@Injectable()
export class PollsService {

    private readonly logger = new Logger(PollsService.name)
    
    constructor(private readonly pollsRepository: PollsRepository){}

    async createPoll(fields: CreatePollFields) {
        const pollID = createPollID()
        const userID = createUserID()

        const createdPoll = await this.pollsRepository.createPoll({
            ...fields,
            pollID,
            userID
        })

        // TODO - create an accessToken based off of pollID and userID

        return {
            poll: createdPoll,
            // accessToken
        }
    }
    
    async joinPoll(fields: JoinPollFields) {
        const userID = createUserID();

        return {
            ...fields,
            userID
        }
    }
    
    async rejoinPoll(fields: RejoinPollFields) {
        return fields
    }
    
}
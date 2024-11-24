import { Injectable, Logger } from "@nestjs/common";
import { CreatePollFields, JoinPollFields, RejoinPollFields } from "./types";
import { createPollID, createUserID } from "src/ids";
import { PollsRepository } from "./polls.repository";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class PollsService {

    private readonly logger = new Logger(PollsService.name)
    
    constructor(
        private readonly pollsRepository: PollsRepository,
        private readonly jwtService: JwtService
    ){}

    async createPoll(fields: CreatePollFields) {
        const pollID = createPollID()
        const userID = createUserID()

        const createdPoll = await this.pollsRepository.createPoll({
            ...fields,
            pollID,
            userID
        })

        this.logger.debug(`Creating token string for pollID: ${createdPoll}`)

        const signedString = this.jwtService.sign(
            {
                pollID: createdPoll.id,
                name: fields.name,
            },
            {
                subject: userID
            },
        );

        return {
            poll: createdPoll,
            accessToken: signedString,
        }
    }
    
    async joinPoll(fields: JoinPollFields) {
        const userID = createUserID();

        this.logger.debug(
            `Fetching poll with ID: ${fields.pollID} for user with ID: ${userID}`
        )

        const joinedPoll = await this.pollsRepository.getPoll(fields.pollID)

        // TODO - create access token

        return {
            poll: joinedPoll,
            // accessToken: signedString
        }
    }
    
    async rejoinPoll(fields: RejoinPollFields) {
        this.logger.debug(`Rejoining poll with ID: ${fields.pollID} for user with ID: ${fields.userID} with name: ${fields.name}`);

        const joinedPoll = await this.pollsRepository.addParticipants(fields)

        return joinedPoll
    }
    
}
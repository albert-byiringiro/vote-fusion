import { Inject, InternalServerErrorException } from '@nestjs/common';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Redis } from 'ioredis';
import { IORedisKey } from 'src/redis.module';
import { AddParticipantData, CreatePollData } from './types';
import { Poll } from 'shared';

@Injectable()
export class PollsRepository {
  // to use time-to-live from configuration
  private readonly ttl: string;
  private readonly logger = new Logger(PollsRepository.name);

  constructor(
    configService: ConfigService,
    @Inject(IORedisKey) private readonly redisClient: Redis,
  ) {
    this.ttl = configService.get('POLL_DURATION');
  }
  
  async createPoll({
    votesPerVoter,
    topic,
    pollID,
    userID,
    }: CreatePollData): Promise<Poll> {
    const initialPoll = {
        id: pollID,
        topic,
        votesPerVoter,
        participants: {},
        adminID: userID,
    };

    this.logger.log(
        `Creating new poll: ${JSON.stringify(initialPoll, null, 2)} with TTL ${
        this.ttl
        }`,
    );

    const key = `polls:${pollID}`;

    try {
        await this.redisClient
        .multi([
            ['send_command', 'JSON.SET', key, '.', JSON.stringify(initialPoll)],
            ['expire', key, this.ttl],
        ])
        .exec();
        return initialPoll;
    } catch (e) {
        this.logger.error(
        `Failed to add poll ${JSON.stringify(initialPoll)}\n${e}`,
        );
        throw new InternalServerErrorException();
    }
    }

    async getPoll(pollID: string) {
        this.logger.log(`Attempting to get poll with: ${pollID}`)

        const key = `polls:${pollID}`

        try {
            const currentPoll = await this.redisClient.send_command(
                'JSON_GET',
                key,
                '.',
            )

            this.logger.verbose(currentPoll)
        } catch (e) {
            this.logger.log(`Failed to get pollID ${pollID}`);
            throw e;
        }
    }

    async addParticipants({pollID, userID, name}:AddParticipantData) {
        this.logger.log(`Attempting to add a participant with userID/name: ${userID}/${name} to ${pollID}`)

        const key = `polls:${pollID}`
        const participantPath = `.participants.${userID}`

        try {
            await this.redisClient.send_command(
                'JSON.POST',
                key,
                participantPath,
                JSON.stringify(name)
            )

            const pollJSON = await this.redisClient.send_command(
                'JSON.GET',
                key,
                '.'
            );

            const poll = JSON.parse(pollJSON) as Poll

            this.logger.debug(`Current Participants for pollID: ${pollID}:`, poll.participants)

            return poll
        } catch (error) {
            this.logger.error(`Failed to add a participant with userID/name: ${userID}/${name}`);
            throw error
        }
    }
}
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { redisModule } from 'src/modules.config';
import { PollsRepository } from './polls.repository';
import { PollsService } from './polls.service';
import { PollsController } from './polls.controller';

@Module({
  imports: [ConfigModule, redisModule],
  controllers: [PollsController],
  providers: [PollsService, PollsRepository],
})
export class PollsModule {}

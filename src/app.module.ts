import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PollModule } from './poll/poll.module';
import { VoteModule } from './vote/vote.module';

@Module({
  imports: [ PrismaModule, UserModule, PollModule, VoteModule],
})
export class AppModule {}

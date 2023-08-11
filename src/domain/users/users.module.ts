import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UserResolver } from './resolvers/user.resolver';

@Module({
  imports: [],
  providers: [UserResolver, UsersService],
  exports: [],
})
export class UsersModule {}

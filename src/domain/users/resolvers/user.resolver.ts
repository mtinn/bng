import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { User } from '../gql/user.output';
import { UsersService } from '../services/users.service';
import { Role } from '../gql/role.output';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  async getUsers() {
    return this.usersService.getAllUsers();
  }
  @ResolveField(() => Role)
  async roles(@Parent() user: User): Promise<Role> {
    return this.usersService.getRoles(user);
  }
}

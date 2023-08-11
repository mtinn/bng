import { User } from '../gql/user.output';
import { Role } from '../gql/role.output';

export class UsersService {
  async getAllUsers() {
    return [
      this.createUser(1, 'test', 'test@mail.com'),
      this.createUser(2, 'test2', 'test2@mail.com'),
    ];
  }

  async getRoles(user: User): Promise<Role> {
    if (user.id == '1') {
      return { name: '1', id: '1' };
    }
    if (user.id == '2') {
      return { name: '2', id: '2' };
    }
  }

  private createUser(id, name, email) {
    const user = new User();
    user.id = id;
    user.name = name;
    user.email = email;
    return user;
  }
}

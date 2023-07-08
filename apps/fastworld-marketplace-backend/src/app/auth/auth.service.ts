/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import UserService from '../users/users.service';
import User from '../users/entitys/user.entity';
@Injectable()
export default class AuthService {
  constructor(private userService: UserService) {}

  public async validateUser(username: string, password: string) {
    return await this.userService.validateUser(username, password);
  }

  public async singin(user: User) {
    return await this.userService.login(user);
  }
}

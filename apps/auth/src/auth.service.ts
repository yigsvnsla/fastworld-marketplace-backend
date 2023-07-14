import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserDto } from 'common/dto/user/user.dto';
import { ClientPattern } from 'common/enum/patterns/clients-pattern.enum';

@Injectable()
export class AuthService {
  constructor(
    
  ) { }

  public validateUser(username: string, password: string) {
    // return await this.userService.validateUser(username, password);
  }

  public singin(user: UserDto) {
    // return await this.userService.login(user);
  }
}
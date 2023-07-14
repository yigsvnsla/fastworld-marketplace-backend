import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ACTION_AUTH } from 'common/enum/actions/actions-auth.enum';
import { MessagePattern } from '@nestjs/microservices';
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @MessagePattern(`${ACTION_AUTH.LOGIN}`)
  public find(signInDto: Record<string, any>) {
    // this.userServic
  }
}

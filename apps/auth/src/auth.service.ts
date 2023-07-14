import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserDto } from 'common/dto/user/user.dto';
import { ACTION_USER } from 'common/enum/actions/action-user.enum';
import { ACTION_AUTH } from 'common/enum/actions/actions-auth.enum';
import { ClientPattern } from 'common/enum/patterns/clients-pattern.enum';
import { tap, timeout } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    @Inject(`${ClientPattern.AUTH_SERVICE}`) private readonly clientAuth: ClientProxy,
    @Inject(`${ClientPattern.USER_SERVICE}`) private readonly usertAuth: ClientProxy,
  ) {
  }

  public validateUser(username: string, password: string) {
    // return await this.userService.validateUser(username, password);
  }

  public singin(signInDto: Record<string, any>) {
    this.usertAuth.send(ACTION_USER.GET, signInDto);
    return `HOLA YA NO SOY YIGS, SOY RICK`

  }
}
/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserDto } from 'common/dto/user/user.dto';
import { ACTION_AUTH } from 'common/enum/actions/actions-auth.enum';
import { ClientPattern } from 'common/enum/patterns/clients-pattern.enum';
import { of, tap } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(
    @Inject(`${ClientPattern.AUTH_SERVICE}`) private clientAuth: ClientProxy,
  ) { }

  public singIn(singInDto: Record<string, any>) {
    return this.clientAuth.send(ACTION_AUTH.LOGIN, singInDto)
  }
}

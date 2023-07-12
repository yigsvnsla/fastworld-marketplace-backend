import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ClientPattern } from 'common/enum/clients-pattern.enum';

@Injectable()
export class UserService {

  constructor(
    @Inject(`${ClientPattern.USER_SERVICE}`) private client: ClientProxy
  ) { }
}

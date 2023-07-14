import { AuthService } from './auth.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';

@Module({
  imports: [],
  controllers: [
    AuthController
  ],
  providers: [
    AuthService,
  ],
})
export class AuthModule { }

import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategys/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { ClientsModule } from '@nestjs/microservices';
import { AUTH_CLIENT_PROVIDER } from 'common/configs/microservices.config';

@Module({
  imports: [
    ClientsModule.register([
      AUTH_CLIENT_PROVIDER,
    ])
  ],
  controllers: [
    AuthController
  ],
  providers: [
    AuthService,
  ],
})
export class AuthModule { }

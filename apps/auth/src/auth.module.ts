import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AUTH_CLIENT_PROVIDER } from 'common/configs/microservices.config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AUTH_SOURCE_OPTIONS } from './database/data-source';

@Module({
  imports: [
    ClientsModule.register([AUTH_CLIENT_PROVIDER]),
    TypeOrmModule.forRoot(AUTH_SOURCE_OPTIONS),
  ],
  providers: [
    AuthService,
  ],
  controllers: [
    AuthController
  ],
})
export class AuthModule { }

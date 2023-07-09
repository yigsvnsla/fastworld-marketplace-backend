import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import AuthService from './auth.service';
import AuthController from './auth.controller';
import UsersModule from '../users/users.module';
import LocalStrategy from './strategys/local.strategy';
import JwtStrategy  from './strategys/jwt.strategy';
import JwtAuthGuard from '../../guards/jwt.guard';
import app_env from '../../configs/env';
import { AUTH_SERVICE } from '../../microservices-config/auth-service.config';
import { ClientsModule } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([AUTH_SERVICE]),
    UsersModule,
    JwtModule.register({
      global: true,
      secret: app_env().app.jwt_secret,
      signOptions: { expiresIn: '5m' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    ConfigService,
    AuthService,
    LocalStrategy,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  exports: [AuthService],
})
export default class AuthModule {}

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import UsersModule from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import app_env from '../../configs/env';
import { APP_GUARD } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { LocalStrategy } from './strategys/local.strategy';
import { JwtStrategy } from './strategys/jwt.strategy';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Module({
  imports: [
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
export class AuthModule {}

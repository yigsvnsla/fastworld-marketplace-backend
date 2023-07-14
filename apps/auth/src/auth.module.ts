import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AUTH_CLIENT_PROVIDER } from 'common/configs/microservices.config';
import { JwtAuthGuard } from 'guards/jwt.guard';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategys/local.strategy';
import { JwtStrategy } from './strategys/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AUTH_SOURCE_OPTIONS } from './database/data-source';
import { HistorySession } from './entitys/history-sessions.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(AUTH_SOURCE_OPTIONS),
    //TypeOrmModule.forFeature([HistorySession]),
    ClientsModule.register([AUTH_CLIENT_PROVIDER]),
    // JwtModule.register({
    //   global: true,
    //   // secret: app_env().app.jwt_secret,
    //   signOptions: {
    //     expiresIn: '5m'
    //   },
    // }),
  ],
  providers: [
    AuthService,
    // ConfigService,
    // LocalStrategy,
    // JwtStrategy,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
  ],
  controllers: [AuthController],
})
export class AuthModule { }

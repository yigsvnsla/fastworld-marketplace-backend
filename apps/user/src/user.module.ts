import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ClientsModule } from '@nestjs/microservices';
import { USER_CLIENT_PROVIDER } from 'common/configs/microservices.config';
import { USER_SOURCE_OPTIONS } from './database/data-source';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ClientsModule.register([USER_CLIENT_PROVIDER]),
    TypeOrmModule.forRoot(USER_SOURCE_OPTIONS),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

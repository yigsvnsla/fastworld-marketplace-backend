import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ClientsModule } from '@nestjs/microservices';
import { USER_CLIENT_PROVIDER } from 'common/configs/microservices.config';

@Module({
  imports: [
    ClientsModule.register([USER_CLIENT_PROVIDER]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

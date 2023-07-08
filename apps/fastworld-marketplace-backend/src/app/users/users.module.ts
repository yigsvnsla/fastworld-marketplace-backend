import { Module } from '@nestjs/common';
import UsersService from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import UsersController from './users.controller';
import User from './entitys/user.entity';
import ProfilesModule from '../profiles/profiles.module';
import RoleModule from '../role/roles.module';

@Module({
  imports: [RoleModule, ProfilesModule, TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, ConfigService],
  exports: [UsersService],
})
export default class UsersModule {}

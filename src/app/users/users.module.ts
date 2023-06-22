import { Module } from '@nestjs/common';
import UsersService from './users.service';
import UsersController from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './entitys/user.entity';
import ProfilesModule from '../profiles/profiles.module';
import RoleModule from '../role/roles.module';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [RoleModule, ProfilesModule, TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, ConfigService],
  exports: [UsersService],
})
export default class UsersModule {}

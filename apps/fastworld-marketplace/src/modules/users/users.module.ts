import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RoleModule } from './modules/role/roles.module';
import { ProfilesModule } from './modules/profiles/profiles.module';
import { UsersController } from './users.controller';
import { UserService } from './users.service';

@Module({
  imports: [
    RoleModule,
    ProfilesModule,
  ],
  controllers: [UsersController],
  providers: [UserService, ConfigService],
  exports: [UserService],
})
export class UsersModule { }

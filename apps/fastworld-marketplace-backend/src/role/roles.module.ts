import RoleController from './roles.controller';
import RoleService from './roles.service';
import Roles from './entity/roles.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Roles])],
  controllers: [RoleController],
  providers: [RoleService],
  exports: [RoleService],
})
export default class RoleModule {}

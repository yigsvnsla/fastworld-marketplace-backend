
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from 'decorators/role.decorator';
import { RoleController } from './roles.controller';
import { RoleService } from './roles.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Roles
    ])
  ],
  controllers: [RoleController],
  providers: [RoleService],
  exports: [RoleService],
})
export class RoleModule { }

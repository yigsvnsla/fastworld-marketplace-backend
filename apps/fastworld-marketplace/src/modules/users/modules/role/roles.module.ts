import { Module } from '@nestjs/common';
import { RoleService } from './roles.service';
import { RoleController } from './roles.controller';

@Module({
  imports: [],
  controllers: [RoleController],
  providers: [RoleService],
  exports: [RoleService],
})
export class RoleModule {}

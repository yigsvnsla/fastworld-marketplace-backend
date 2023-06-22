import { Controller, Get, Post, Body } from '@nestjs/common';
import RoleService from './roles.service';
import Role from './entity/roles.entity';
import CreateRoleDto from './DTOs/create-role.dto';

@Controller('role')
export default class RoleController {
  constructor(private roleService: RoleService) {}

  @Get()
  public async findAllRoles(): Promise<Role[]> {
    return await this.roleService.findAllRole();
  }

  @Post()
  public async createOneRole(
    @Body() createRoleDto: CreateRoleDto,
  ): Promise<Role> {
    return this.roleService.createRole(createRoleDto);
  }
}

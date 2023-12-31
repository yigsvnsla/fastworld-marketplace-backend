import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import RoleService from './roles.service';
import CreateRoleDto from './DTOs/create-role.dto';

@Controller('role')
export default class RoleController {
  constructor(private roleService: RoleService) {}

  @Get()
  public async findAllRoles() {
    return await this.roleService.findAllRoles();
  }

  @Get(':type')
  public async findRole(@Param('type') type: string) {
    return this.roleService.findRole(type);
  }

  @Post()
  public async createRole(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.createRole(createRoleDto);
  }
}

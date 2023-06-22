/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Role from './entity/roles.entity';
import { Repository } from 'typeorm';
import CreateRoleDto from './DTOs/create-role.dto';

@Injectable()
export default class RoleService {
  constructor(@InjectRepository(Role) private roleRepo: Repository<Role>) {}
  public async findAllRole(): Promise<Role[]> {
    return await this.roleRepo.find();
  }
  public async findOneRole(type: string) {
    const role = await this.roleRepo.findOneBy({ type });
    if (!role) {
      throw new NotFoundException();
    }
    return role;
  }
  public async createRole(createRoleDto: CreateRoleDto) {
    const newRole = this.roleRepo.create(createRoleDto);
    return await this.roleRepo.save(newRole);
  }
}

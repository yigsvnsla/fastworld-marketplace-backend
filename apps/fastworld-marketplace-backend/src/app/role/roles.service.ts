import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Role from './entity/roles.entity';
import { Repository } from 'typeorm';
import CreateRoleDto from './DTOs/create-role.dto';
import RoleDto from './DTOs/role.dto';

@Injectable()
export default class RoleService {
  constructor(@InjectRepository(Role) private roleRepo: Repository<Role>) {}
  public async findAllRoles() {
    const roles = await this.roleRepo.find();
    return roles.map((role) => new RoleDto(role));
  }

  public async findRole(type: string) {
    const role = await this.roleRepo.findOneBy({ type });

    if (!role) {
      throw new NotFoundException();
    }

    return new RoleDto(role);
  }

  public async createRole(createRoleDto: CreateRoleDto) {
    const role = this.roleRepo.create(createRoleDto);
    const createdRole = await this.roleRepo.save(role);

    return new RoleDto(createdRole);
  }
}

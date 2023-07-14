import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from 'common/dto/role/create-role.dto';

@Injectable()
export class RoleService {
  constructor() { }

  public async findAllRoles() {
    // const roles = await this.roleRepo.find();
    // return roles.map((role) => new RoleDto(role));
  }

  public async findRole(type: string) {
    // const role = await this.roleRepo.findOneBy({ type });
    // if (!role) {
    //   throw new NotFoundException();
    // }
    // return new RoleDto(role);
  }

  public async createRole(createRoleDto: CreateRoleDto) {
    // const role = this.roleRepo.create(createRoleDto);
    // const createdRole = await this.roleRepo.save(role);
    // return new RoleDto(createdRole);
  }
}

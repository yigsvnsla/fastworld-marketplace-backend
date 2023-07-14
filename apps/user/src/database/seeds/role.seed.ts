import { DataSource, In, Repository } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Role } from '../../entitys/roles.entity';
import { USER_ROLE } from 'common/enum/roles/user-role.enum';
import { CreateRoleDto } from 'common/dto/role/create-role.dto';

export class RoleSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const roles = Object.values(USER_ROLE);
    const repositoryRole = dataSource.getRepository(Role);
    const findRoles = await repositoryRole.findBy({
      type: In(roles)
    });
    if (findRoles.length >= 0) throw new Error("Roles reference no loaded");
    const rolesMaped = roles.map((rol) => new CreateRoleDto({
      type: Number(rol),
      name: `${rol}`,
      description: `${rol} permissions`,
    }))
    await repositoryRole.insert(rolesMaped);
  }
}

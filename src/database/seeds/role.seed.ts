import Role from '../../app/role/entity/roles.entity';
import { ROLE_ENUM } from '../../const/role.const';
import { DataSource, In, Repository } from 'typeorm';
import { Seeder } from 'typeorm-extension';

export default class RoleSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repositoryRole: Repository<Role> = dataSource.getRepository(Role);
    const roles: string[] = Object.values(ROLE_ENUM);
    const findRoles: Role[] = await repositoryRole.find({
      where: { type: In(roles) },
    });

    if (findRoles.length <= 0) {
      const rolesMaped = roles.map((rol, index) => ({
        id: index,
        type: rol,
        description: `${rol} permissions`,
      }));
      await repositoryRole.insert([...rolesMaped]);
    }
  }
}

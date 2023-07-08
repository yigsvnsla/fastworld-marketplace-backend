import Profile from '../../app/profiles/entitys/profile.entity';
import Role from '../../app/role/entity/roles.entity';
import User from '../../app/users/entitys/user.entity';
import { ROLE_ENUM } from '../../const/role.const';
import { DataSource, Repository } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import * as bcrypt from 'bcrypt';

export default class OwnerSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    try {
      const username = 'owner';
      const password = 'owner123';
      const saltOrRounds = 10;
      const repositoryUser: Repository<User> = dataSource.getRepository(User);
      if (await repositoryUser.findOneBy({ username })) {
        throw new Error('this User Owner already is registered');
      }
      const repositoryRole: Repository<Role> = dataSource.getRepository(Role);
      const role = await repositoryRole.findOneBy({ type: ROLE_ENUM.Admin });
      const profileFactory = factoryManager.get(Profile);
      const profile = await profileFactory.save();
      const hashPass = await bcrypt.hash(password, saltOrRounds);
      const createOwner: User = repositoryUser.create({
        password: hashPass,
        username,
        profile,
        role,
      });
      await repositoryUser.insert(createOwner);
    } catch (error) {
      console.log(error);
    }
  }
}

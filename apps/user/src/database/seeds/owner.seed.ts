import { DataSource, Repository } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { User } from '../../entitys/user.entity';
import { Role } from '../../entitys/roles.entity';
import { USER_ROLE } from 'common/enum/user-role.enum';
import { Profile } from '../../entitys/profile.entity';
import * as bcrypt from 'bcrypt';

export class OwnerSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    try {
      const username = 'owner';
      const password = 'owner123';
      const saltOrRounds = 10;
      const repositoryUser: Repository<User> = dataSource.getRepository(User);
      if (await repositoryUser.findOneBy({ username })) throw new Error('This User Owner already is registered');
      const repositoryRole: Repository<Role> = dataSource.getRepository(Role);
      const role = await repositoryRole.findOneBy({ type: USER_ROLE.Admin });
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

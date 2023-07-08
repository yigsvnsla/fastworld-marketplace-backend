import { setSeederFactory } from 'typeorm-extension';
import Profile from '../../app/profiles/entitys/profile.entity';
import CreateProfileDto from '../../app/profiles/DTOs/create-profile.dto';

export default setSeederFactory(Profile, (faker) => {
  const profile = new CreateProfileDto();
  profile.firstName = faker.person.firstName();
  profile.lastName = faker.person.lastName();
  profile.email = faker.internet.email({
    firstName: profile.firstName,
    lastName: profile.lastName,
  });
  profile.phone = faker.phone.number('+593987469359');

  return Object.assign(new Profile(), profile);
});

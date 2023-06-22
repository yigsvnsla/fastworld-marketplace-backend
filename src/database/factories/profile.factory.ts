import { setSeederFactory } from 'typeorm-extension';
import Profile from '../../app/profiles/entitys/profile.entity';
import CreateProfileDto from '../../app/profiles/DTOs/create-profile.dto';

export default setSeederFactory(Profile, (faker) => {
  const profile = new CreateProfileDto();
  profile.firstName = faker.name.firstName();
  profile.lastName = faker.name.lastName();
  profile.email = faker.internet.email(profile.firstName, profile.lastName);
  profile.phone = faker.phone.number('+593987469359');
  return profile;
});

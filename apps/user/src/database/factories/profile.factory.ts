import { setSeederFactory } from 'typeorm-extension';
import { Profile } from '../../entitys/profile.entity';
import { CreateProfileDto } from 'common/dto/profile/create-profile.dto';

export default setSeederFactory(Profile, (faker) => {
  const profile = new CreateProfileDto({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phone: faker.phone.number('+593987469359'),
    email: faker.internet.email({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    }),
  });
  return Object.assign(new Profile(), profile);
});

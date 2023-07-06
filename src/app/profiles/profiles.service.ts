import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import Profile from './entitys/profile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import CreateProfileDto from './DTOs/create-profile.dto';
import QueryParamsDto from 'src/common/dtos/query-params.dto';
import ProfileDto from './DTOs/profile.dto';
import UpdateProfileDto from './DTOs/update-profile.dto';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile) private profileRepo: Repository<Profile>,
  ) {}

  public async findAllProfiles(queryParams: QueryParamsDto) {
    const profiles = await this.profileRepo.find(queryParams);

    return profiles.map((profile) => new ProfileDto(profile));
  }

  public async findProfile(id: number, queryParams: QueryParamsDto) {
    const profile = await this.profileRepo.findOne({
      where: { id },
      ...queryParams,
    });

    return new ProfileDto(profile);
  }

  public async createProfile(createProfileDto: CreateProfileDto) {
    const newProfile = this.profileRepo.create(createProfileDto);
    const profile = await this.profileRepo.save(newProfile);

    if (!profile) {
      throw new BadRequestException();
    }

    return new ProfileDto(profile);
  }

  public async updateProfile(id: number, updateProfileDto: UpdateProfileDto) {
    const profile = await this.profileRepo.findOne({ where: { id } });
    const updatedProfile = await this.profileRepo.save({
      ...profile,
      ...updateProfileDto,
    });

    return new ProfileDto(updatedProfile);
  }

  public async deleteProfile(id: number) {
    const profile = await this.profileRepo.findOne({ where: { id } });

    const deletedUser = await this.profileRepo.save({
      ...profile,
      isActive: false,
    });

    return new ProfileDto(deletedUser);
  }
}

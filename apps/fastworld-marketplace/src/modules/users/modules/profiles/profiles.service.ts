import { BadRequestException, Injectable } from '@nestjs/common';
import { QueryParamsDto } from 'common/dto/pagination/query-params.dto';
import { CreateProfileDto } from 'common/dto/profile/create-profile.dto';
import { UpdateProfileDto } from 'common/dto/profile/update-profile.dto';

@Injectable()
export class ProfilesService {
  constructor(
  ) { }

  public async findAllProfiles(queryParams: QueryParamsDto) {
    // const profiles = await this.profileRepo.find(queryParams);
    // return profiles.map((profile) => new ProfileDto(profile));
  }

  public async findProfile(id: number, queryParams: QueryParamsDto) {
    // const profile = await this.profileRepo.findOne({
    //   where: { id },
    //   ...queryParams,
    // });
    // return new ProfileDto(profile);
  }

  public async createProfile(createProfileDto: CreateProfileDto) {
    // const newProfile = this.profileRepo.create(createProfileDto);
    // const profile = await this.profileRepo.save(newProfile);
    // if (!profile) throw new BadRequestException();
    // return new ProfileDto(profile);
  }

  public async updateProfile(id: number, updateProfileDto: UpdateProfileDto) {
    // const profile = await this.profileRepo.findOne({ where: { id } });
    // const updatedProfile = await this.profileRepo.save({
    //   ...profile,
    //   ...updateProfileDto,
    // });
    // return new ProfileDto(updatedProfile);
  }

  public async deleteProfile(id: number) {
    // const profile = await this.profileRepo.findOne({ where: { id } });
    // const deletedUser = await this.profileRepo.save({
    //   ...profile,
    //   isActive: false,
    // });
    // return new ProfileDto(deletedUser);
  }
}

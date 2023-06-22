/*
https://docs.nestjs.com/providers#services
*/

import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import Profile from './entitys/profile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import CreateProfileDto from './DTOs/create-profile.dto';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile) private profileRepo: Repository<Profile>,
  ) {}

  public async createProfile(
    createProfileDto: CreateProfileDto,
  ): Promise<Profile> {
    const newProfile = this.profileRepo.create(createProfileDto);
    const profile = await this.profileRepo.save(newProfile);
    if (!profile) {
      throw new BadRequestException();
    }
    return profile;
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import QueryParamsDto from '../../common/dtos/query-params.dto';
import CreateProfileDto from './DTOs/create-profile.dto';
import UpdateProfileDto from './DTOs/update-profile.dto';

@Controller('profiles')
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}

  @Get()
  public async findAllProfiles(@Query() queryParams: QueryParamsDto) {
    return await this.profilesService.findAllProfiles(queryParams);
  }

  @Get(':id')
  public async findProfile(
    @Param('id', ParseIntPipe) id: number,
    queryParams: QueryParamsDto,
  ) {
    return await this.profilesService.findProfile(id, queryParams);
  }

  @Post()
  public async createProfile(@Body() createProfileDto: CreateProfileDto) {
    return await this.profilesService.createProfile(createProfileDto);
  }

  @Put(':id')
  public async updateProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return await this.profilesService.updateProfile(id, updateProfileDto);
  }

  @Delete(':id')
  public async deleteProfile(@Param('id', ParseIntPipe) id: number) {
    return await this.profilesService.deleteProfile(id);
  }
}

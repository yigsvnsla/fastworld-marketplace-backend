import {
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsString,
  // IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import CreateProfileDto from '../../../app/profiles/DTOs/create-profile.dto';
import { Relation } from 'typeorm';

export default class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  public username: string;

  @IsString()
  @IsNotEmpty()
  public password: string;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CreateProfileDto)
  public profile: Relation<CreateProfileDto>;

  public role: string;
}

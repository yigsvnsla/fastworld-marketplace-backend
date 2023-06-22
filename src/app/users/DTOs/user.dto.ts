import { Exclude, Type } from 'class-transformer';
import {
  IsBoolean,
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import ProfileDto from '../../../app/profiles/DTOs/profile.dto';
import Role from 'src/app/role/entity/roles.entity';

export default class UserDto {
  @IsString()
  @IsNotEmpty()
  public username: string;

  @IsString()
  @IsNotEmpty()
  @Exclude()
  public password: string;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => ProfileDto)
  public profile: ProfileDto;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public role: Role;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  public id: number;

  @IsOptional()
  @IsBoolean()
  public isActive: boolean;

  constructor(partial: Partial<UserDto>) {
    Object.assign(this, partial);
  }
}

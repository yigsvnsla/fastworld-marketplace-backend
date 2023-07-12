import { Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { Relation } from 'typeorm';
import { UserDto } from '../user/user.dto';

export class ProfileDto {
  @IsNotEmpty()
  @IsString()
  public firstName: string;

  @IsNotEmpty()
  @IsString()
  public lastName: string;

  @IsNotEmpty()
  @IsString()
  public phone: string;

  @IsNotEmpty()
  @IsString()
  public email: string;

  @Type(() => UserDto)
  public user: Relation<UserDto>;

  constructor(partial: Partial<ProfileDto>) {
    Object.assign(this, partial);
  }
}

import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';
import { UserDto } from '../user/user.dto';

export class CreateProfileDto {
  @IsNotEmpty()
  @IsString()
  public firstName: string;

  @IsNotEmpty()
  @IsString()
  public lastName: string;

  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  public phone: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  public email: string;

  @Type(() => UserDto)
  public users: UserDto;

  constructor(
    partial: Partial<CreateProfileDto>
  ) {
    Object.assign(this, partial);
  }
}

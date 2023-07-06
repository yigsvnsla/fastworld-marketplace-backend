import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';
import User from '../../users/entitys/user.entity';

export default class CreateProfileDto {
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

  @Type(() => User)
  public users: User;
}

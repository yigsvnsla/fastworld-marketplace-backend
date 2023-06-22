import { IsNotEmpty, IsString } from 'class-validator';

export default class SinginDto {
  @IsString()
  @IsNotEmpty()
  public username: string;

  @IsString()
  @IsNotEmpty()
  public password: string;
}

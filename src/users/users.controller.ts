import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import UsersService from './users.service';
import Users from './entitys/users.entity';

@Controller('users')
export default class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  public async findAllUsers(): Promise<Users[]> {
    return await this.usersService.findAllUser();
  }
  @Get(':id')
  public async findOneUsers(@Param('id') id: number) {
    return await this.usersService.findOneUser(id);
  }
  @Post()
  public async createUsers(@Body() body: unknown) {
    return await this.usersService.createUser(body);
  }
  @Put(':id')
  public async updateOneUsers(@Param('id') id: number, @Body() body: any) {
    return await this.usersService.updateOneUser(id, body);
  }
  @Delete(':id')
  public async deleteUsers(@Param('id') id: number) {
    return await this.usersService.deleteOneUser(id);
  }
}

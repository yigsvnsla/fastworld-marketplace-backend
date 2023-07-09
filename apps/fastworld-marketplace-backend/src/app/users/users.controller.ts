import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import UsersService from './users.service';
import CreateUserDto from './DTOs/create-user.dto';
import { Public } from '../../decorators/public.decorator';
import { Roles } from '../../decorators/role.decorator';
import { ROLE_ENUM } from '../../const/role.const';
import { RolesGuard } from '../../guards/roles.guard';
import QueryParamsDto from '../../common/dtos/query-params.dto';
import { Headers } from '@nestjs/common';
import { Response } from 'express';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export default class UsersController {
  constructor(private usersService: UsersService) { }

  @Roles(ROLE_ENUM.Admin)
  @UseGuards(RolesGuard)
  @Get()
  public async findAllUsers(@Query() queryParams: QueryParamsDto) {
    return await this.usersService.findAllUser(queryParams);
  }

  @Roles(ROLE_ENUM.Admin)
  @UseGuards(RolesGuard)
  @Post('admin')
  public async createUsersAdmin(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createUserAdmin(createUserDto);
  }

  @Roles(ROLE_ENUM.Admin)
  @UseGuards(RolesGuard)
  @Post('manager')
  public async createUsersManager(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createUserManager(createUserDto);
  }

  @Public()
  @Post('client')
  public async createUsers(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createUserClient(createUserDto);
  }

  @Public()
  @Get('me')
  public async findMe(@Headers('authorization') token: string) {
    return await this.usersService.findMe(token);
  }

  @Roles(ROLE_ENUM.Admin)
  @UseGuards(RolesGuard)
  @Get(':id')
  public async findOneUsers(
    @Param('id') id: number,
    @Query() queryParams: QueryParamsDto,
  ) {
    return await this.usersService.findUser(id, queryParams);
  }

  @Roles(ROLE_ENUM.Admin, ROLE_ENUM.Manager)
  @UseGuards(RolesGuard)
  @Put(':id')
  public async updateOneUsers(@Param('id') id: number, @Body() body: any) {
    return await this.usersService.updateOneUser(id, body);
  }

  @Roles(ROLE_ENUM.Admin, ROLE_ENUM.Manager)
  @UseGuards(RolesGuard)
  @Put('/:role/:id')
  public async deleteUsers(
    @Param('role') role: string,
    @Param('id') id: number,
    @Res({ passthrough: true }) response: Response,
  ) {
    response.statusMessage = 'Update status';
    return await this.usersService.updateStatusUser(role, id);
  }
}

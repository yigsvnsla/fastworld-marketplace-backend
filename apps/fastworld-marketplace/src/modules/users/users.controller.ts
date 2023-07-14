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
import { Public } from '../../../../../decorators/public.decorator';
import { Roles } from '../../../../../decorators/role.decorator';
import { RolesGuard } from '../../../../../guards/roles.guard';
import { Headers } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './users.service';
import { USER_ROLE } from 'common/enum/roles/user-role.enum';
import { QueryParamsDto } from 'common/dto/pagination/query-params.dto';
import { CreateUserDto } from 'common/dto/user/create-user.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {
  constructor(
    private userService: UserService
  ) { }

  @Roles(USER_ROLE.Admin)
  @UseGuards(RolesGuard)
  @Get()
  public async findAllUsers(
    @Query() queryParams: QueryParamsDto
  ) {
    // return await this.usersService.findAllUser(queryParams);
  }

  @Roles(USER_ROLE.Admin)
  @UseGuards(RolesGuard)
  @Post('admin')
  public async createUsersAdmin(
    @Body() createUserDto: CreateUserDto
  ) {
    // return await this.usersService.createUserAdmin(createUserDto);
  }

  @Roles(USER_ROLE.Admin)
  @UseGuards(RolesGuard)
  @Post('manager')
  public async createUsersManager(
    @Body() createUserDto: CreateUserDto
  ) {
    // return await this.usersService.createUserManager(createUserDto);
  }

  @Public()
  @Post('client')
  public async createUsers(
    @Body() createUserDto: CreateUserDto
  ) {
    // return await this.usersService.createUserClient(createUserDto);
  }

  @Public()
  @Get('me')
  public async findMe(
    @Headers('authorization') token: string
  ) {
    // return await this.usersService.findMe(token);
  }

  @Roles(USER_ROLE.Admin)
  @UseGuards(RolesGuard)
  @Get(':id')
  public async findOneUsers(
    @Param('id') id: number,
    @Query() queryParams: QueryParamsDto,
  ) {
    // return await this.usersService.findUser(id, queryParams);
  }

  @Roles(USER_ROLE.Admin, USER_ROLE.Manager)
  @UseGuards(RolesGuard)
  @Put(':id')
  public async updateOneUsers(
    @Param('id') id: number,
    @Body() body: any
  ) {
    // return await this.usersService.updateOneUser(id, body);
  }

  @Roles(USER_ROLE.Admin, USER_ROLE.Manager)
  @UseGuards(RolesGuard)
  @Put('/:role/:id')
  public async deleteUsers(
    @Param('role') role: string,
    @Param('id') id: number,
    @Res({ passthrough: true }) response: Response,
  ) {
    // response.statusMessage = 'Update status';
    // return await this.usersService.updateStatusUser(role, id);
  }
}

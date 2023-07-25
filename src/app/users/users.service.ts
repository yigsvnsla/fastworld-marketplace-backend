import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ROLE_ENUM } from './../../const/role.const';
import { ProfilesService } from '../profiles/profiles.service';
import QueryParamsDto from '../../common/dtos/query-params.dto';
import PageMetaDto from '../../common/dtos/page-meta.dto';
import PageDto from '../../common/dtos/page.dto';
import CreateUserDto from './DTOs/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import RoleService from '../role/roles.service';
import User from './entitys/user.entity';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import UserDto from './DTOs/user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export default class UserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private profileService: ProfilesService,
    private jwtService: JwtService,
    private roleService: RoleService,
  ) {}

  public async findMe(token: string) {
    const cleanedToken = token.split(' ')[1];
    const {
      payload: { id },
    } = this.jwtService.verify<any>(cleanedToken, {
      complete: true,
    });
    const findUser = await this.userRepo.findOne({
      where: { id },
      relations: ['role'],
    });

    return new UserDto(findUser);
  }

  public async findAllUser(queryParams: QueryParamsDto) {

    const [entities, count] = await Promise.all([
      this.userRepo.find(queryParams),
      this.userRepo.count(queryParams),
    ]);

    const pageMetaDto = new PageMetaDto({
      pageOptionsDto: queryParams,
      itemCount: count,
    });

    return new PageDto(entities, pageMetaDto);
  }

  public async findUser(id: number, queryParams: QueryParamsDto) {
    const findUser = await this.userRepo.findOne({
      where: { id },
      relations: queryParams.relations,
    });

    if (!findUser) {
      throw new NotFoundException();
    }

    return new UserDto(findUser);
  }

  public async createUserAdmin(createUserDto: CreateUserDto) {
    return await this.createUser(createUserDto, ROLE_ENUM.Admin);
  }

  public async createUserManager(createUserDto: CreateUserDto) {
    return await this.createUser(createUserDto, ROLE_ENUM.Manager);
  }

  public async createUserClient(createUserDto: CreateUserDto) {
    return await this.createUser(createUserDto, ROLE_ENUM.Client);
  }

  private async createUser(createUserDto: CreateUserDto, role: string) {
    const saltOrRounds = 10;
    const findUser = await this.userRepo.findOneBy({
      username: createUserDto.username,
    });

    if (findUser) {
      throw new NotAcceptableException('this username already use');
    }

    const findRole = await this.roleService.findRole(role);
    const newProfile = await this.profileService.createProfile(
      createUserDto.profile,
    );

    const hashPass = await bcrypt.hash(createUserDto.password, saltOrRounds);
    const newUser = this.userRepo.create({
      ...createUserDto,
      password: hashPass,
      profile: newProfile,
      role: findRole,
    });

    const user = await this.userRepo.save(newUser);
    return new UserDto(user);
  }

  public async updateOneUser(id: number, body: User) {
    const findUser = await this.userRepo.findOne({
      where: { id },
      relations: ['role', 'profile'],
    });
    // check pass empty
    if (!findUser) throw new NotFoundException();
    if (!body.password) delete body.password;
    const mergeUser = this.userRepo.merge(findUser, body);
    const updateUser = await this.userRepo.save(mergeUser);
    return new UserDto(updateUser);
  }

  public async updateStatusUser(role: string, id: number) {
    if (ROLE_ENUM[role]) {
      throw new NotAcceptableException('Role not acceptable');
    }
    const findUser = await this.userRepo.findOneBy({ id });
    const createUser = this.userRepo.create({
      ...findUser,
      isActive: !findUser.isActive,
    });

    return await this.userRepo.save(createUser);
  }

  public async validateUser(username: string, pass: string) {
    const findUser = await this.userRepo.findOne({
      where: { username },
      relations: ['role'],
    });
    const isMatch = await bcrypt.compare(pass, findUser.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }

    return new UserDto(findUser);
  }

  async login(user: User) {
    const payload = { ...user, username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

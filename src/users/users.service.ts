import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Users from './entitys/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export default class UsersService {
  constructor(@InjectRepository(Users) private userRepo: Repository<Users>) {}
  public async findAllUser(): Promise<Users[]> {
    return await this.userRepo.find();
  }
  public async findOneUser(id: number): Promise<Users> {
    console.log(await this.userRepo.findOneBy({ id }));
    return await this.userRepo.findOneBy({ id });
  }
  public async createUser(body: any) {
    const newUser = this.userRepo.create(body);
    return await this.userRepo.save(newUser);
  }
  public async updateOneUser(id: number, body: any): Promise<Users> {
    const findUser = await this.userRepo.findOneBy({ id });
    this.userRepo.merge(findUser, body);
    return await this.userRepo.save(findUser);
  }
  public async deleteOneUser(id: number) {
    return await this.userRepo.delete(id);
  }
}

import User from '../../users/entitys/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Relation } from 'typeorm';

@Entity()
export default class Role {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public type: string;

  @Column()
  public description: string;

  @OneToMany(() => User, (user) => user.role)
  public user: Relation<User>;
}

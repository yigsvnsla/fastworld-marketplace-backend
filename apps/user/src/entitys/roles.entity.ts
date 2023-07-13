import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Relation } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public type: number;

  @Column()
  public name: string;

  @Column()
  public description: string;

  @OneToMany(() => User, (user) => user.role)
  public user: Relation<User>;
}

import { User } from '../../../../../auth/src/entitys/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, Relation } from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column()
  public phone: string;

  @Column()
  public email: string;

  @OneToOne(() => User, (user) => user.profile)
  public user: Relation<User>;

  @Column({ default: true })
  public isActive: boolean;
}

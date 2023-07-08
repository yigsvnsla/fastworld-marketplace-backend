import { Exclude } from 'class-transformer';
import Profile from '../../profiles/entitys/profile.entity';
import Role from '../../role/entity/roles.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  Relation,
} from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public username: string;

  @Column()
  public password: string;

  @Column({ default: true })
  public isActive: boolean;

  @OneToOne(() => Profile, { cascade: true })
  @JoinColumn()
  public profile: Relation<Profile>;

  @ManyToOne(() => Role, (role) => role.user)
  @JoinColumn()
  public role: Relation<Role>;
}

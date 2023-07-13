import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  Relation,
} from 'typeorm';
import { Profile } from './profile.entity';
import { Role } from './roles.entity';

@Entity()
export class User {
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
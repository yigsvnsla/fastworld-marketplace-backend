import { ACTION_SESSION } from 'common/enum/actions-session.enum';
import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class HistorySession {

  @PrimaryGeneratedColumn("uuid")
  public id: number;

  @CreateDateColumn()
  public createAt: string;

  // TODO: DESCOMMENT HOW IMPLEMENT RELATIONAL DATABASE 
  // @Column({
  //   type:'enum',
  //   enum:ACTION_SESSION,
  //   default : ACTION_SESSION.LOGOUT
  // })
  // public action: ACTION_SESSION

  // ! DELETE HOW IMPLEMENT RELATIONAL DATABASE
  @Column({
    default: ACTION_SESSION.LOGIN
  })
  public action: number
}

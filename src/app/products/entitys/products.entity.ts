import Category  from './../../categories/entitys/category.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';

@Entity()
export default class Product {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public description: string;

  @Column()
  public price: number;

  @ManyToMany(() => Category, (category) => category.id)
  @JoinTable()
  public categories: Relation<Category[]>;

  @Column({ default: true })
  public isActive: boolean;
}

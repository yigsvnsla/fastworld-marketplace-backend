import { Category } from './../../categories/entitys/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
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
  public price: string;

  @ManyToMany(() => Category, (category) => category.id)
  @JoinColumn()
  public categories: Category;
}

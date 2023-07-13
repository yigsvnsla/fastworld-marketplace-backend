import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  // JoinColumn,
  // ManyToMany,
  Tree,
  // TreeParent,
  // TreeChildren,
  ManyToOne,
  OneToMany,
  JoinColumn,
  Relation,
  // OneToMany,
} from 'typeorm';
import { Product } from './products.entity';

@Entity()
@Tree('adjacency-list')
export class Category {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public description: string;

  @ManyToOne(() => Category, (category) => category.children, {
    nullable: true,
  })
  @JoinColumn()
  public parent: Relation<Category>;

  @OneToMany(() => Category, (category) => category.parent)
  @JoinColumn()
  public children: Relation<Category[]>;

  // todo: revisar si es la relación indicada
  @OneToMany(() => Product, (product) => product.categories)
  @JoinColumn()
  public product: Relation<Product>;

  @Column({ default: true })
  public isActive: boolean;
}

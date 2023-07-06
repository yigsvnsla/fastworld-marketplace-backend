import Product from '../../products/entitys/products.entity';
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
  // OneToMany,
} from 'typeorm';

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
  public parent: Category;

  @OneToMany(() => Category, (category) => category.parent)
  @JoinColumn()
  public children: Category[];

  // todo: revisar si es la relación indicada
  @OneToMany(() => Product, (product) => product.categories)
  @JoinColumn()
  public product: Product;

  @Column({ default: true })
  public isActive: boolean;
}

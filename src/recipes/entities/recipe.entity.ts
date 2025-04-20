import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  slug: string;

  @Column()
  description: string;

  @Column()
  ingredients: string;

  @Column()
  instructions: string;

  @Column()
  preparationTime: number;

  @Column()
  cookingTime: number;

  @Column()
  totalTime: number;

  @Column()
  servings: number;

  @Column()
  image: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.recipies)
  user: User;

  @BeforeInsert()
  @BeforeUpdate()
  calculateTotalTime() {
    this.totalTime = this.preparationTime + this.cookingTime;
  }
}

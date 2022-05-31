import {Field, ObjectType} from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@ObjectType()
@Entity()
export class Post extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field()
  @Column()
  service!: string;

  @Field()
  @Column()
  language!: string;

  @Field()
  @Column()
  gender!: string;

  @Field()
  @Column()
  voiceId!: string;

  @Field()
  @Column()
  url!: string;

  @Field()
  @Column()
  creatorId: number;
}

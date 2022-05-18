import {Arg, Mutation, Query, Resolver} from 'type-graphql';
import {getConnection} from 'typeorm';
import {Post} from '../entities/Post';

@Resolver()
export class PostResolver {
  @Query(() => Post, {nullable: true})
  post(@Arg('id') id: number) {
    return Post.findOne(id);
  }

  @Query(() => [Post], {nullable: true})
  async posts(@Arg('limit') limit: number): Promise<Post[]> {
    const postLimit = Math.min(50, limit);
    const result = await getConnection()
      .getRepository(Post)
      .createQueryBuilder()
      .orderBy('"createdAt"', 'DESC')
      .take(postLimit)
      .getMany();

    return result;
  }

  @Mutation(() => Post)
  async createPosts(@Arg('title') title: string) {
    const post = Post.create({title}).save();
    return post;
  }

  @Mutation(() => Post, {nullable: true})
  async updatePost(
    @Arg('id') id: number,
    @Arg('title', () => String, {nullable: true}) title: string
  ): Promise<Post | null> {
    const result = await getConnection()
      .createQueryBuilder()
      .update(Post)
      .set({title})
      .where('id = :id', {
        id
      })
      .returning('*')
      .execute();

    console.log('Update Post :', result);
    return result.raw[0];
  }

  @Mutation(() => Boolean)
  async deletePost(@Arg('id') id: number) {
    try {
      await Post.delete({id});
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  }
}

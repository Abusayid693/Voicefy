import {Post} from '../entities/Post';
import {Resolver, Query, Arg, Mutation} from 'type-graphql';
import {getConnection} from 'typeorm';

@Resolver()
export class PostResolver {
  @Query(() => Post, {nullable: true})
  post(
    // @Arg("id", ()=> Int) id: number,
    @Arg('id') id: number
  ) {
    return Post.findOne(id);
  }

  @Query(() => [Post], {nullable: true})
  posts(): Promise<Post[]> {
    return Post.find();
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

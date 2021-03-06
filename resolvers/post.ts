import {
  Arg,
  Ctx,
  Int,
  Mutation,
  Query,
  Resolver,
  UseMiddleware
} from 'type-graphql';
import {getConnection} from 'typeorm';
import {MyContext} from '../@types/types';
import {Post} from '../entities/Post';
import {protect} from '../middlewares/protect';

@Resolver()
export class PostResolver {
  @Query(() => Post, {nullable: true})
  @UseMiddleware(protect)
  post(@Arg('id') id: number) {
    return Post.findOne(id);
  }

  @Query(() => [Post], {nullable: true})
  @UseMiddleware(protect)
  async posts(
    @Arg('limit', () => Int, {nullable: true}) limit: number,
    @Ctx() {req}: MyContext
  ): Promise<Post[]> {
    const query = getConnection()
      .getRepository(Post)
      .createQueryBuilder()
      .where('"creatorId" = :creatorId', {
        creatorId: req.user.id
      })
      .orderBy('"createdAt"', 'DESC');

    if (limit) query.take(limit);

    return await query.getMany();
  }

  @Mutation(() => Post)
  @UseMiddleware(protect)
  async createPosts(
    @Arg('language') language: string,
    @Arg('service') service: string,
    @Arg('gender') gender: string,
    @Arg('voiceId') voiceId: string,
    @Arg('url', () => String, {nullable: false}) url: string,

    @Ctx() {req}: MyContext
  ) {
    const post = Post.create({
      language,
      creatorId: req.user.id,
      service,
      gender,
      voiceId,
      url
    }).save();
    return post;
  }

  @Mutation(() => Post, {nullable: true})
  @UseMiddleware(protect)
  async updatePost(
    @Arg('id') id: number,
    @Arg('voiceId', () => String, {nullable: true}) voiceId: string
  ): Promise<Post | null> {
    const result = await getConnection()
      .createQueryBuilder()
      .update(Post)
      .set({voiceId})
      .where('id = :id', {
        id
      })
      .returning('*')
      .execute();

    console.log('Update Post :', result);
    return result.raw[0];
  }

  @Mutation(() => Boolean)
  @UseMiddleware(protect)
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

import { Post } from "../entities/Post";
import { Resolver, Query, Ctx, Arg, Mutation } from "type-graphql";
import { MyContext } from "../types";

@Resolver()
export class PostResolver {
  @Query(() => Post, { nullable: true })
  post(
    // @Arg("id", ()=> Int) id: number,
    @Arg("id") id: number,
    @Ctx() { em }: MyContext
  ) {
    return em.find(Post, { id });
  }

  @Query(() => [Post], { nullable: true })
  posts(@Ctx() { em }: MyContext): Promise<Post[]> {
    return em.find(Post, {});
  }

  @Mutation(() => Post)
  async createPosts(
    @Arg("title") title: string,
    //  @Arg("title", ()=>String) title: string,
    //  @Arg("id") id: number,
    @Ctx() { em }: MyContext
  ) {
    const post = em.create(Post, { title });
    await em.persistAndFlush(post);
    return post;
  }

  @Mutation(() => Post, { nullable: true })
  async updatePost(
    @Arg("id") id: number,
    @Arg("title", () => String, { nullable: true }) title: string,
    @Ctx() { em }: MyContext
  ): Promise<Post | null> {
    const post = await em.find(Post, { id });
    if (!post) return null;

    if (typeof title !== "undefined") {
      post[0].title = title;
      await em.persistAndFlush(post);
    }

    return post[0];
  }

  @Mutation(() => Boolean)
  async deletePost(@Arg("id") id: number, @Ctx() { em }: MyContext) {
    try {
      await em.nativeDelete(Post, { id });
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  }
}

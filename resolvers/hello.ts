import { Resolver, Query, Arg, Ctx } from "type-graphql";
import { MyContext } from "../types";

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello(
    @Arg("options") options: string,
    @Ctx() { em, req }: MyContext
  ): String {
    
    console.log(req.headers.authorization);

    return options + "bye";
  }
}

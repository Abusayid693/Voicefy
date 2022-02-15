import { Resolver, Query, Arg } from "type-graphql";

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello(@Arg("options") options: string): String {
    return options + "bye";
  }
}

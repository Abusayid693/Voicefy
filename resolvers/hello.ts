import {Arg, Ctx, Query, Resolver} from 'type-graphql';
import {MyContext} from '../@types/types';

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello(@Arg('options') options: string, @Ctx() {req}: MyContext): String {
    console.log(req.headers.authorization);

    return options + 'bye';
  }
}

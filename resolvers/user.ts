import { User } from "../entities/User";
import { MyContext } from "../types";
import {
  Resolver,
  Arg,
  InputType,
  Field,
  Ctx,
  Mutation,
  ObjectType,
  Query,
} from "type-graphql";
import argon2 from "argon2";

@InputType()
class UsernamePasswordInput {
  @Field()
  username: string;
  @Field()
  password: string;
}

@ObjectType()
class FieldError {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async Me(@Ctx() { req, em }: MyContext) {

    // No cookie session
    if (!req.session.usernumId) {
      return null;
    }
    const user = await em.findOne(User, { id: req.session.usernumId });
    return user;
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { em, req }: MyContext
  ): Promise<UserResponse> {

    const hashedPassword = await argon2.hash(options.password);

    const user = em.create(User, {
      username: options.username,
      password: hashedPassword,
    });

    try {
      await em.persistAndFlush(user);

    } catch (err) {
      console.log(" Registration error :", err);
      if (err.code == "23505" && err.detail.includes("already exists")) {
        return {
          errors: [
            {
              field: "username",
              message: "Selected username already exist",
            },
          ],
        };
      } else {
        return {
          errors: [
            {
              field: "Server error",
              message: "Internal server error please try again later",
            },
          ],
        };
      }
    }
    req.session.usernumId = user.id;
    return {
      user: user,
    };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { em, req }: MyContext
  ): Promise<UserResponse> {
    const user = await em.findOne(User, { username: options.username });

    if (!user) {
      return {
        errors: [
          {
            field: "username",
            message: "User name does not exist",
          },
        ],
      };
    }

    const valid = await argon2.verify(user.password, options.password);

    if (!valid) {
      return {
        errors: [
          {
            field: "password",
            message: "Incorrect password",
          },
        ],
      };
    }

    // cookie login session
    req.session.usernumId = user.id;

    return {
      user: user,
    };
  }
}

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
  UseMiddleware,
} from "type-graphql";
import argon2 from "argon2";
import { generateToken } from "../helpers";
import { protect } from "../middlewares/protect";

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

  @Field(() => String, { nullable: true })
  token?: String;
}

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  @UseMiddleware(protect)
  Me(@Ctx() { req, em }: MyContext) {
    const user = req.user;
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
    const token = generateToken({ _id: user.id });
    req.session.usernumId = user.id;
    return {
      user: user,
      token,
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

    const token = generateToken({ _id: user.id });
    // cookie login session
    req.session.usernumId = user.id;

    return {
      user: user,
      token,
    };
  }
}

// @Query(() => User, { nullable: true })
// me(@Ctx() { req }: MyContext) {
//   // you are not logged in
//   if (!req.session.userId) {
//     return null;
//   }

//   return User.findOne(req.session.userId);
// }

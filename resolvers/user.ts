import argon2 from "argon2";
import {
  Arg, Ctx, Field, InputType, Mutation,
  ObjectType,
  Query, Resolver, UseMiddleware
} from "type-graphql";
import { getConnection } from "typeorm";
import { MyContext } from "../@types/types";
import { EatherUser } from "../entities/User";
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

  @Field(() => EatherUser, { nullable: true })
  user?: EatherUser;

  @Field(() => String, { nullable: true })
  token?: String;
}

@Resolver()
export class UserResolver {
  @Query(() => EatherUser, { nullable: true })
  @UseMiddleware(protect)
  Me(@Ctx() { req }: MyContext) {
    const user = req.user;
    return user;
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const hashedPassword = await argon2.hash(options.password);
    let user;
    try {
      // User.create({}).save()
      const result = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(EatherUser)
        .values({
          username: options.username,
          password: hashedPassword,
          email: `${options.username}@gmail.com`
        })
        .returning("*")
        .execute();
      user = result.raw[0];
    } catch (err) {
      if (err.code === "23505") {
        return {
          errors: [
            {
              field: "username",
              message: "username already taken",
            },
          ],
        };
      }
      else {
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
    return {
      user: user,
      token,
    };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {

    const { username } = options;
    const user = await EatherUser.findOne({ where: { username } });

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
    return {
      user: user,
      token,
    };
  }
}

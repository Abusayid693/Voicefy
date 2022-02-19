import dotenv from "dotenv";
dotenv.config({ path: "./local.env" });

import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";
import express from "express";
import fileupload from "express-fileupload";
import { MyContext } from "./types";
import { env } from "process";

import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";

import redis from "redis";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";
import fileUpload from "./isolated/file.upload";

/* @https://github.com/DefinitelyTyped/DefinitelyTyped/issues/49941
 *  Declare all your cookie variables here
 */
declare module "express-session" {
  interface Session {
    usernumId: number;
  }
}

const app = express();
let orm: any;

const main = async () => {
  try {
    orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();
    console.log("Database successfully connected");
  } catch (error) {
    console.log("Database error :", error);
  }

  // --------- Cookie setup ----------------
  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient();

  app.use(
    session({
      name: "qid",
      store: new RedisStore({
        client: redisClient,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
        httpOnly: true,
        secure: false,
        sameSite: "lax",
      },
      saveUninitialized: false,
      secret: "kjjkjkkbjkbuguygyug",
      resave: false,
      proxy: true,
    })
  );

  app.use(
    cors({
      origin: env.CORS_ORIGIN,
      credentials: true,
    })
  );
  app.use(fileupload());
  app.use("/upload", fileUpload);
  // -------------- Cookie setup end ----------------

  const apolloServer = new ApolloServer({
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({ em: orm.em, req, res }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(env.PORT, () => {
    console.log("Server listening on port 4000");
  });

  // const post = orm.em.create(Post, { title: "Testing first post" });
  // await orm.em.persistAndFlush(post);

  const posts = await orm.em.find(Post, {});
  console.log(posts);
};

main().catch((err) => {
  console.error(err);
});

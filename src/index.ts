import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";
import express from "express";
import {MyContext} from "./types"

import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";

import redis from "redis";
import session from "express-session";
import connectRedis from "connect-redis";



/* @https://github.com/DefinitelyTyped/DefinitelyTyped/issues/49941
 *  Declare all your cookie variables here
*/
declare module 'express-session' {
  interface Session {
     usernumId: number;
   }
 }



const main = async () => {
  const app = express();
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();

  // --------- Cookie setup ----------------
  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient();

  app.use(
    session({
      name:'qid',
      store:new RedisStore({
        client:redisClient,
        disableTouch:true,
      }),
      cookie:{
        maxAge:1000 * 60 * 60 * 24 * 365 * 10,
        httpOnly:true,
        secure:__prod__,
        sameSite:'lax'
      },
      saveUninitialized:false,
      secret:"kjjkjkkbjkbuguygyug",
      resave:false,
    })
  );
  // -------------- Cookie setup end ----------------
 
  const apolloServer = new ApolloServer({
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver, UserResolver],
      validate: false,
    }),
    context: ({req,res}): MyContext => ({ em: orm.em, req, res}),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: true });

  app.listen(4000, () => {
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

console.log("Helo World");

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

import cors from "cors";
import fileUpload from "./isolated/file.upload";
import { User } from "./entities/User";

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

  app.use(
    cors({
      origin: env.CORS_ORIGIN,
      credentials: true,
    })
  );

  app.use(fileupload());
  app.get("/", (req, res) => {
    res.send("Welcome to server baby");
  });
  app.use("/", fileUpload);

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

  const listener = app.listen(env.PORT || 4000);
  // @ts-ignore
  console.log(`Server listening on port ${listener.address().port}`);
  await orm.em.transactional(async () => {
    await orm.em.find(User, {});
  });
};

main().catch((err) => {
  console.error(err);
});

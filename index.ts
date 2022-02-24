import dotenv from "dotenv";
dotenv.config({ path: "./local.env" });

import { createConnection } from "typeorm"
import { __prod__ } from "./constants";
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
import production from "./production.config.db"
import cors from "cors";
import fileUpload from "./isolated/s3/file.upload";
import tts from "./isolated/tts/tts.demo"

const app = express();
let orm: any;

const main = async () => {
  // @ts-ignore
  const conn = await createConnection(production)
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
  app.use("/",tts)
  // -------------- Cookie setup end ----------------

  const apolloServer = new ApolloServer({
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({req, res }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  const listener = app.listen(env.PORT || 4000);
  // @ts-ignore
  console.log(`Server listening on port ${listener.address().port}`);
};

main().catch((err) => {
  console.error(err);
});

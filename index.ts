import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import fileupload from "express-fileupload";
import { env } from "process";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import db from "./db.config";
import fileUpload from "./isolated/s3/file.upload";
import tts from "./isolated/tts/tts.route";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";
import { MyContext } from "./types";
dotenv.config({ path: "./local.env" });




const app = express();
app.use(express.json());

const main = async () => {
  // @ts-ignore
  const conn = await createConnection(db)
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
    cors: true,
  });

  const listener = app.listen(env.PORT || 4000);
  // @ts-ignore
  console.log(`Server listening on port ${listener.address().port}`);
};

main().catch((err) => {
  console.error(err);
});

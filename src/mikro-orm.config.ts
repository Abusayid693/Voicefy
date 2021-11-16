import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname,"./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
    wrap:false
  },
  entities: [Post],
  dbName: "postgres",
  user: "rehanchoudhury",
//   password: "app_password",

  debug: !__prod__,
  type: "postgresql",
} as Parameters<typeof MikroORM.init>[0];

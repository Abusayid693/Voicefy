import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { User } from "./entities/User"
import { MikroORM } from "@mikro-orm/core";
import { env } from "process";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
    wrap: false
  },
  entities: [Post, User],
  dbName: "postgres",
  user: env.DB_USER,
  debug: !__prod__,
  type: "postgresql",
} as Parameters<typeof MikroORM.init>[0];

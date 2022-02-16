import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { User } from "./entities/User"
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import production from "./production.config.db"


const local = {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
    wrap: false
  },
  entities: [Post, User],
  dbName: "postgres",
  user: 'rehanchoudhury',
  debug: !__prod__,
  type: "postgresql",
}

const config = !__prod__ ? local: production;

export default {
  ...config
} as Parameters<typeof MikroORM.init>[0];

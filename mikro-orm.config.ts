import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { User } from "./entities/User";
import { MikroORM } from "@mikro-orm/core";
import { env } from "process";
import path from "path";

const production = {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
    wrap: false,
  },
  entities: [Post, User],
  dbName: env.DB_RDS_NAME,
  user: env.DB_USER,
  password: env.DB_RDS_PASS,
  debug: !__prod__,
  port: 5432,
  type: "postgresql",
  host: env.DB_RDS_HOST,
};

const local = {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
    wrap: false,
  },
  entities: [Post, User],
  dbName: "postgres",
  user: env.DB_USER,
  debug: !__prod__,
  type: "postgresql",
};

const config = !__prod__ ? local : production;

export default {
  ...config,
} as Parameters<typeof MikroORM.init>[0];

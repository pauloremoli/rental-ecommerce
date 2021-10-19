import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entities/Post';
import path from "path";
require('dotenv').config();

export default {
    migrations: {
        path: path.join(__dirname, './migrations'), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
      },
    entities: [Post],
    dbName: process.env.DB_NAME,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    type: 'postgresql',
    debug: !__prod__,
  } as Parameters<typeof MikroORM.init>[0];
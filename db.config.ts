import {__prod__} from './constants';
import {Post} from './entities/Post';
import {EatherUser} from './entities/User';
import production from './production.config.db';

const local = {
  type: 'postgres',
  username: 'rehanchoudhury',
  database: 'postgres',
  logging: true,
  entities: [Post, EatherUser],
  synchronize: true
};

const dbConfig = !__prod__ ? local : production;

export default local;

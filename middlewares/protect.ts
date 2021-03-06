import jwt from 'jsonwebtoken';
import {MiddlewareFn} from 'type-graphql';
import {MyContext} from '../@types/types';
import {EatherUser} from '../entities/User';
import {JWT_SECRET} from '../local.config';

export const protect: MiddlewareFn<MyContext> = async ({context}, next) => {
  let token;
  const {req} = context;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // eg:  Bearer evifheiuhgurih....
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    throw new Error('not authenticated');
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log(decoded);
    // @ts-ignore
    const user = await EatherUser.findOne(decoded.id);

    if (!user) {
      throw new Error('not authenticated');
    }
    req.user = user;

    return next();
  } catch (error) {
    throw new Error('not authenticated');
  }
};

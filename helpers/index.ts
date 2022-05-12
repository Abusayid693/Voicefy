import jwt from 'jsonwebtoken';
import {JWT_SECRET, JWT_EXPIRE} from '../local.config';

export const generateToken = ({_id}: {_id: any}) => {
  console.log(_id);
  return jwt.sign({id: _id}, JWT_SECRET, {
    expiresIn: JWT_EXPIRE
  });
};

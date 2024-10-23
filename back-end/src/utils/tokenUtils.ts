import jwt, { JwtPayload } from 'jsonwebtoken';
import { IUser } from '../models/User';

const accessTokenSecret = process.env.JWT_ACCESS_SECRET_KEY as string;
const refreshTokenSecret = process.env.JWT_REFRESH_SECRET_KEY as string;

export const generateAccessToken = (user: IUser) => {
  return jwt.sign({ userId: user._id }, accessTokenSecret, { expiresIn: '15m' });
};

export const generateRefreshToken = (user: IUser) => {
  return jwt.sign({ userId: user._id }, refreshTokenSecret, { expiresIn: '7d' });
};

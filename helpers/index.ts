import crypto from "crypto";
import jwt from "jsonwebtoken";

export const generateToken = ({ _id }: { _id: any }) => {
  return jwt.sign({ id: _id }, "env.JWT_SECRET", {
    expiresIn: "1000min",
  });
};

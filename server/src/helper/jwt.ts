import jwt from "jsonwebtoken";
import { iUser } from "../interfaces/interface";

function createToken(data: iUser[]): string {
  const secret: string = "salt";
  return jwt.sign(data[0], secret);
}

export { createToken };

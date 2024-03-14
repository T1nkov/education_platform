import express, { Request, Response } from "express";
import { createUser, authorizUser } from "../service/api.service";
import { iUser } from "../interfaces/interface";

import { createToken } from "../helper/jwt";
const route = express.Router();

route.post("/reg", async (req: Request, res: Response) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data: iUser[] = await createUser(name, surname, email, pwd);
    res.status(200).send(data);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

route.post("/auth", async (req: Request, res: Response) => {
  try {
    const { email, pwd } = req.body;
    const data: iUser[] = await authorizUser(email, pwd);
    const token: string = createToken(data);
    res.status(200).send(data);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

export default route;

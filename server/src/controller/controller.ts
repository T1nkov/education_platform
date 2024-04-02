import { Router, Request, Response } from "express";
import { iUser } from "../interfaces/interface";
import {
  createData,
  getAllUser,
  getAllUserById,
  updateUser,
  deleteUser,
  partUpdateUser,
} from "../service/service";
const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data: iUser[] = await createData(name, surname, email, pwd);
    res.status(200).send(data);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const data: iUser[] = await getAllUser();
    res.status(200).send(data);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data:iUser[] = await getAllUserById(id);
    res.status(200).send(data);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data:iUser[] = await updateUser(id, name, surname, email, pwd);
    res.status(200).send(data);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data:iUser[] = await deleteUser(id);
    res.status(200).send(data);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

router.patch("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data:iUser[] = await partUpdateUser(+id, body);
    res.status(200).send(data);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

export default router;

import { Router, Request, Response } from "express";
import { iCourse } from "../interfaces/interface";

import {
  createCourse,
  getAllCourse,
  updateCourse,
  deleteCourse,
} from "../service/course.service";
const routeCourse = Router();

routeCourse.post("/", async (req: Request, res: Response) => {
  try {
    const { course, description } = req.body;
    const data: iCourse[] = await createCourse(course, description);
    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

routeCourse.get("/", async (_req: Request, res: Response) => {
  try {
    const data: iCourse[] = await getAllCourse();
    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

routeCourse.put("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { course, description } = req.body;
    const data: iCourse[] = await updateCourse(id, course, description);
    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

routeCourse.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data: iCourse[] = await deleteCourse(id);
    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

export default routeCourse;

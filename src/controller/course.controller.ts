import { Router, Request, Response } from "express";
import { iCourse } from "../interfaces/interface";

import { createCourse } from "../service/course.service";
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

export default routeCourse;

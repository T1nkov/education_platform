import { iCourse } from "../interfaces/interface";

import {
  createCourseDB,
  getAllCourseDB,
  updateCourseDB,
} from "../repository/course.repository";

async function createCourse(
  course: string,
  description: string
): Promise<iCourse[]> {
  const data: iCourse[] = await createCourseDB(course, description);
  return data;
}

async function getAllCourse(): Promise<iCourse[]> {
  const data: iCourse[] = await getAllCourseDB();
  return data;
}

async function updateCourse(
  id: number,
  course: string,
  description: string
): Promise<iCourse[]> {
  const data: iCourse[] = await updateCourseDB(id, course, description);
  return data;
}
export { createCourse, getAllCourse, updateCourse };

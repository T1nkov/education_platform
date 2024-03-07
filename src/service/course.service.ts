import { iCourse } from "../interfaces/interface";

import {
  createCourseDB,
  getAllCourseDB,
  updateCourseDB,
  deleteCourseDB,
  pathCourseDB
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

async function deleteCourse(id: number): Promise<iCourse[]> {
  const data: iCourse[] = await deleteCourseDB(id);
  return data;
}

async function pathCourse(id:number, body:any):Promise<iCourse[]> {
    const data: iCourse[] = await pathCourse(id, body)
    return data
}
export { createCourse, getAllCourse, updateCourse, deleteCourse,pathCourse };

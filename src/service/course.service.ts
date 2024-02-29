import { iCourse } from "../interfaces/interface";

import { createCourseDB } from "../repository/course.repository";

async function createCourse(course: string, description: string) {
  const data = createCourseDB(course, description);
  return data;
}

export { createCourse };

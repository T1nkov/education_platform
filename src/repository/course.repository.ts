import pool from "../db";
import { iCourse } from "../interfaces/interface";

async function createCourseDB(course: string, description: string) {
  const client = await pool.connect();

  const sql: string =
    "INSERT Into courses (course, description) Values ($1,$2) returning *";
  const { rows } = await client.query(sql, [course, description]);
  return rows;
}

export { createCourseDB };

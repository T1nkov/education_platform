import pool from "../db";
import { iCourse } from "../interfaces/interface";

async function createCourseDB(
  course: string,
  description: string
): Promise<iCourse[]> {
  const client = await pool.connect();

  const sql: string =
    "INSERT Into courses (course, description) Values ($1,$2) returning *";
  const { rows } = await client.query(sql, [course, description]);
  return rows;
}

async function getAllCourseDB(): Promise<iCourse[]> {
  const client = await pool.connect();
  const sql: string = "SELECT * FROM courses order by id asc";
  const { rows } = await client.query(sql);
  return rows;
}

async function updateCourseDB(
  id: number,
  course: string,
  description: string
): Promise<iCourse[]> {
  const client = await pool.connect();
  try {
    client.query("BEGIN");
    const sql: string =
      "UPDATE courses set course = $1, description = $2 where id = $3 returning *";
    const { rows } = await client.query(sql, [course, description, id]);
    client.query("COMMIT");
    return rows;
  } catch (error) {
    client.query("ROLLBACK");
  }
}

async function deleteCourseDB(id: number): Promise<iCourse[]> {
  const client = await pool.connect();
  const sql: string = "DELETE FROM course where id = $1 returning *";
  const { rows } = await client.query(sql, [id]);
  return rows;
}

async function pathCourseDB(id: number, body: any) {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");
    const queryCourseOld: string =
      "SELECT * FROM course when id = $1 RETURNING *";
    const { rows: old } = await client.query(queryCourseOld, [id]);
    const pathCourse = { ...old, body };
    const queryCourse: string =
      "update users set course = $2, description = $3, where id = $1 returning *";
    const { rows: pathRows } = await client.query(queryCourse, [
      pathCourse.id,
      pathCourse.course,
      pathCourse.description,
    ]);
    await client.query("commit");
    return pathRows;
  } catch (error: any) {
    await client.query("ROLLBACK");
    return [];
  }
}
export {
  createCourseDB,
  getAllCourseDB,
  updateCourseDB,
  deleteCourseDB,
  pathCourseDB,
};

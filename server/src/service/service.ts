import { iUser } from "../interfaces/interface";
import {
  createDataDB,
  getAllUserDB,
  getAllUserByIdDB,
  updateUserDB,
  deleteUserDB,
  partUpdateUserDB,
} from "../repository/repository";

async function createData(
  name: string,
  surname: string,
  email: string,
  pwd: string
): Promise<iUser[]> {
  const data: iUser[] = await createDataDB(name, surname, email, pwd);
  if (!data.length) throw new Error("data do not create");
  return data;
}

async function getAllUser():Promise<iUser[]> {
  const data: iUser[] = await getAllUserDB();
  if (!data.length) throw new Error("database is empty");
  return data;
}

async function getAllUserById(id: number): Promise<iUser[]> {
  const data: iUser[] = await getAllUserByIdDB(id);
  if (!data.length) throw new Error("Id is not found");
  return data;
}

async function updateUser(
  id: number,
  name: string,
  surname: string,
  email: string,
  pwd: string
): Promise<iUser[]> {
  const data: iUser[] = await updateUserDB(id, name, surname, email, pwd);
  if (!data.length) throw new Error("Data is not saved");
  return data;
}

async function deleteUser(id: number): Promise<iUser[]> {
  const data: iUser[] = await deleteUserDB(id);
  if (!data.length) throw new Error("Id is not found, data was not deleted");
  return data;
}

async function partUpdateUser(id: number, body: iUser): Promise<iUser[]> {
  const data: iUser[] = await partUpdateUserDB(id, body);
  if (!data.length) throw new Error("Data is not changed");
  return data;
}

export {
  createData,
  getAllUser,
  getAllUserById,
  updateUser,
  deleteUser,
  partUpdateUser,
};

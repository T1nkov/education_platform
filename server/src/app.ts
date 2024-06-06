import express from "express";
import { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import router from "./controller/controller";
import routeAPI from "./controller/api.conroller"
import cookieParser from "cookie-parser";
import routeCourse from "./controller/course.controller";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    method: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
  })
);

app.use(json());
app.use(cookieParser());

app.use("/user", router);

app.use("/course", routeCourse);

app.use("/api", routeAPI);

app.use((er: any, _req: Request, res: Response, _next: NextFunction) =>
  res.send(er.message)
);

export { app };

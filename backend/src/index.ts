import express, { Express, Request, Response } from 'express';
import { users, users2 } from "./db/user.data";
import {User, UserResponse} from './models/user.interface';


const app: Express = express();

app.get("/api", (req: Request, res: Response): void => {
  res.send("/users for obtain users list");
});

app.get("/api/users", (req: Request, res: Response): void => {
  res.send(users);
});

app.get("/api/users2", (req: Request, res: Response): void => {
  function func1(users: UserResponse[]) {
    res.send(users);
  }
  users2(func1);
});

const port = 3000;
app.listen(port, (): void => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
});

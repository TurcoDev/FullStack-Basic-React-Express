import express, { Express, Request, Response } from 'express';
import { users } from "./db/user.data";


const app: Express = express();

app.get("/api", (req: Request, res: Response): void => {
  res.send("/users for obtain users list");
});

app.get("/api/users", (req: Request, res: Response): void => {
  res.send(users);
});

const port = 3000;
app.listen(port, (): void => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
});

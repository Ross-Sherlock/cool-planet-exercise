import express, { Request, Response } from "express";
import User from "../../shared-types/User";
import fs from "fs";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// TODO: Seperate out into layers --- repo, service, controller
let users: User[] = [];

// Read mock user data
try {
  const data = fs.readFileSync("./src/users.json", "utf8");
  users = JSON.parse(data) as User[];
} catch (err) {
  console.error(err);
}

app.get("/", (req: Request, res: Response) => {
  res.send("Test");
});

app.get("/users", (req: Request, res: Response) => {
  res.send(users);
});

app.get("/users/:id", (req: Request, res: Response) => {
  const user_id = parseInt(req.params.id);
  const user = users.find((u) => u.id === user_id);
  user ? res.status(200).send(user) : res.status(404).send("User not found");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

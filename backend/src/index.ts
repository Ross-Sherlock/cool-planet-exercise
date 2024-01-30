import express from "express";
import * as userController from "./controllers/UserController";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.get("/users", userController.getUsers);
app.get("/users/:id", userController.getUserById);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
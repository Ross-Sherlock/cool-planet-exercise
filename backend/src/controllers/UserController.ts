import express, { Request, Response } from "express";
import * as userService from "../services/UserService";

export const getUsers = (req: Request, res: Response): void => {
  const users = userService.getAllUserPreviews();
  res.send(users);
};

export const getUserById = (req: Request, res: Response): void => {
  const user_id = parseInt(req.params.id);
  const user = userService.getUserById(user_id);
  user ? res.status(200).send(user) : res.status(404).send("User not found");
};

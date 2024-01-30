import fs from "fs";
import User from "../../../shared-types/User";
import UserPreview from "../../../shared-types/UserPreview";

let users: User[] = [];

export const getUsers = (): User[] => {
  if (users.length === 0) {
    try {
      const data = fs.readFileSync("./src/users.json", "utf8");
      users = JSON.parse(data) as User[];
    } catch (err) {
      console.error(err);
    }
  }
  return users;
};

export const getUserById = (id: number): User | undefined => {
  getUsers();
  return users.find((u) => u.id === id);
};

export const getAllUserPreviews = (): UserPreview[] => {
  getUsers();
  return users.map((user) => ({
    id: user.id,
    avatar: user.avatar,
    first_name: user.first_name,
    last_name: user.last_name,
  }));
};

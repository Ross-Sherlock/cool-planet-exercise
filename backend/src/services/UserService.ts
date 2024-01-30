import User from "../../../shared-types/User";
import UserPreview from "../../../shared-types/UserPreview";
import * as userRepository from "../data/UserRepository";

export const getAllUsers = (): User[] => {
  return userRepository.getUsers();
};

export const getUserById = (id: number): User | undefined  => {
  return userRepository.getUserById(id);
};

export const getAllUserPreviews = (): UserPreview[] => {
    return userRepository.getAllUserPreviews();
  };

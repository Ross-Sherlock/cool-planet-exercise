import User from "../../../shared-types/User";

export interface UserContext {
  user: User | null;
  error: string | null;
  userId: string;
}

import UserPreview from "../../../shared-types/UserPreview";

export interface UsersContext {
  users: UserPreview[] | null;
  errorMessage: string | null;
}

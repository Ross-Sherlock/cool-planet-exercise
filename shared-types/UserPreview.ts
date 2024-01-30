import User from "./User";

export default interface UserPreview
  extends Omit<
    User,
    "email" | "emailVerified" | "dob" | "company" | "skills"
  > {}
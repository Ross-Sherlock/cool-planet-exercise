import { useEffect, useState } from "react";
import User from "../../../shared-types/User";
import Spinner from "../components/SharedComponents/Spinner";
import "./users.css";
import UserPreviewCard from "../components/UserList/UserPreviewCard";
import UserPreview from "../../../shared-types/UserPreview";

const Users = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<UserPreview[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("http://localhost:3000/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const userData: UserPreview[] = await response.json();
        setUsers(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading)
    return (
      <div className="spinner-container">
        <Spinner />
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="user-list">
        <ul>
          {users
            ? [...users]
                .sort((a, b) => a.first_name.localeCompare(b.first_name))
                .map((user) => (
                  <li key={user.id} className="user-list-item">
                    <UserPreviewCard user={user} />
                  </li>
                ))
            : "No users found"}
        </ul>
      </div>
    </>
  );
};

export default Users;

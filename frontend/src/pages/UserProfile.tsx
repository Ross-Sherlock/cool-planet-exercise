import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import User from "../../../shared-types/User";
import Spinner from "../components/SharedComponents/Spinner";
import "./userprofile.css";
import UserCard from "../components/UserProfile/UserCard";
import UserDetailsCard from "../components/UserProfile/UserDetailsCard";
import SkillsCard from "../components/UserProfile/SkillsCard";
import { ErrorOutline } from "@mui/icons-material";

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`http://localhost:3000/users/${id}`);
        if (response.status === 404) {
          throw new Error("User not found");
        }
        if (!response.ok) {
          throw new Error("An error occurred while fetching the user data");
        }
        const userData: User = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <ErrorOutline fontSize="inherit" />
        <div>{error}</div>
      </div>
    );
  }

  if (user) {
    return (
        <div className="profile-container">
          <div className="left-pane">
            <UserCard
              firstName={user.first_name}
              lastName={user.last_name}
              avatar={user.avatar}
              verified={user.emailVerified}
            />
            <SkillsCard skills={user.skills}></SkillsCard>
          </div>
          <div className="central-pane">
            <UserDetailsCard
              id={user.id}
              email={user.email}
              dob={user.dob}
              company={user.company.name}
              department={user.company.department}
            />
          </div>
        </div>
    );
  }

  return (
    <>
      <div>No user data</div>
    </>
  );
};

export default UserProfile;

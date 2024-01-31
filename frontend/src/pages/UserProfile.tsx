import { useParams } from "react-router-dom";
import Spinner from "../components/SharedComponents/Spinner";
import "./userprofile.css";
import UserCard from "../components/UserProfile/UserCard";
import UserDetailsCard from "../components/UserProfile/UserDetailsCard";
import SkillsCard from "../components/UserProfile/SkillsCard";
import { ErrorOutline } from "@mui/icons-material";
import { userProfileMachine } from "../state-machines/UserProfileMachine";
import { useMachine } from "@xstate/react";
import { Button } from "@mui/material";

const UserProfile = () => {
  const { id } = useParams();
  const [state, send] = useMachine(userProfileMachine(id!));
  const { user, error } = state.context;

  const retryFetch = () => {
    send("RETRY");
  };

  if (state.matches("loading")) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (state.matches("failure") || !user) {
    return (
      <div className="error-container">
        <ErrorOutline fontSize="inherit" />
        <div>{error?.toString()}</div>
        <Button variant="outlined" onClick={retryFetch}>
          Retry
        </Button>
      </div>
    );
  }

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
};

export default UserProfile;

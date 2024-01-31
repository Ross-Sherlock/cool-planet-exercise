import Spinner from "../components/SharedComponents/Spinner";
import "./users.css";
import UserPreviewCard from "../components/UserList/UserPreviewCard";
import { useMachine } from "@xstate/react";
import { usersMachine } from "../state-machines/UsersMachine";
import { ErrorOutline } from "@mui/icons-material";
import { Button } from "@mui/material";

const Users = () => {
  const [state, send] = useMachine(usersMachine);

  const { users, errorMessage: error } = state.context;

  const retryFetch = () => {
    send("RETRY");
  };

  if (state.matches("loading"))
    return (
      <div className="spinner-container">
        <Spinner />
      </div>
    );

  if (state.matches("failure")) {
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
  );
};

export default Users;

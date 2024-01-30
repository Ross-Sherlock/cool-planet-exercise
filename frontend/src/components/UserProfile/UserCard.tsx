import UserAvatar from "../SharedComponents/UserAvatar";
import "./usercard.css";
import VerifiedIcon from "@mui/icons-material/Verified";

interface UserCardProps {
  firstName: string;
  lastName: string;
  avatar?: string;
  verified: boolean;
}

const UserCard: React.FC<UserCardProps> = ({
  firstName,
  lastName,
  avatar,
  verified,
}) => {
  return (
    <div className="user-card">
      <UserAvatar avatarSource={avatar} />
      <h1>
        {firstName} {lastName}
      </h1>
      <div className="verified-container">
        {verified ? (
          <>
            <p className="verif-p">Verified</p>
            <VerifiedIcon style={{ fill: "green" }} />
          </>
        ) : (
          <p className="verif-p">Unverified</p>
        )}
      </div>
    </div>
  );
};

export default UserCard;

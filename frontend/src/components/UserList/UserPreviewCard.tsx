import { Link } from "react-router-dom";
import UserAvatar from "../SharedComponents/UserAvatar";
import "./userpreviewcard.css";
import UserPreview from "../../../../shared-types/UserPreview";

interface UserPreviewCardProps {
  user: UserPreview;
}

const UserPreviewCard: React.FC<UserPreviewCardProps> = ({ user }) => {
  return (
    <>
      <div className="user-preview-card">
        <Link to={`/users/${user.id}`}>
          <UserAvatar avatarSource={user.avatar} key={user.id} />
          <div>
            {user.first_name} {user.last_name}
          </div>
        </Link>
      </div>
    </>
  );
};

export default UserPreviewCard;

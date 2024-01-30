import { useState } from "react";
import "./useravatar.css";

interface UserAvatarProps {
  avatarSource?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ avatarSource }) => {
  const [imageSource, setImageSource] = useState(avatarSource || "/icon.png");

  const setDefaultSource = () => {
    setImageSource("/icon.png");
  };

  return (
    <>
      <img
        className="user-avatar"
        src={imageSource}
        onError={setDefaultSource}
        alt="User Avatar"
      />
    </>
  );
};

export default UserAvatar;

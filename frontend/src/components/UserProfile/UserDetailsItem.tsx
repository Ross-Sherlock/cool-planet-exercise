import "./userdetailsitem.css";

interface UserDetailsItemProps {
  title: string;
  value: string | number;
}

const UserDetailsItem: React.FC<UserDetailsItemProps> = ({ title, value }) => {
  return (
      <div className="user-details-item">
        <div className="user-details-title">{title}</div>
        <div className="user-value">{value}</div>
      </div>
  );
};

export default UserDetailsItem;

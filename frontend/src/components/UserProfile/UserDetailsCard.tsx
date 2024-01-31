import UserDetailsItem from "./UserDetailsItem";
import "./userdetailscard.css";

interface UserDetailsProps {
  id: number;
  email: string;
  dob: string;
  company: string;
  department: string;
}

const UserDetailsCard: React.FC<UserDetailsProps> = ({
  id,
  email,
  dob,
  company,
  department,
}) => {
  return (
      <div className="user-details-card">
        <UserDetailsItem key="id" title="ID" value={id}/>
        <UserDetailsItem key="email" title="Email" value={email}/>
        <UserDetailsItem key="dob" title="Date of birth" value={dob}/>
        <UserDetailsItem key="company" title="Company" value={company}/>
        <UserDetailsItem key="dept" title="Department" value={department}/>
      </div>
  );
};

export default UserDetailsCard;

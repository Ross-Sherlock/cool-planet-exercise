import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-items">
          <div className="logo">
            <Link to="/">
              <h1>CoolPlanet</h1>
            </Link>
          </div>
          <Link to="/">
            <IconButton>
              <HomeIcon></HomeIcon>
            </IconButton>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

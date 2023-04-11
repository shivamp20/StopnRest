import Button from "mui-button";
import React from "react";
import { Link } from "react-router-dom";
import "./OwnerNav.css";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
function OwnerNav() {
  const linkstyle = { textDecoration: "none" };
  const navigate = useNavigate();
  const logoutHandler = () => {
    window.localStorage.clear();
    navigate("/");
  };
  return (
    <div className="on-nav">
      <Link to="/dashboard" style={linkstyle}>
        <img src="./logo_thumbnail.png" alt="" />
      </Link>
      <div className="on-links">
        <div className="on-links2">
          <Link to="/addProperty" style={linkstyle}>
            <span>My Property</span>
          </Link>
          <Link to="/ownerProfile" style={linkstyle}>
            <span>Profile</span>
          </Link>
          <Link to="/support" style={linkstyle}>
            <span>Support</span>
          </Link>
        </div>
        <Button onClick={logoutHandler} variant="outlined">
          <span className="main-text">
            <LogoutIcon style={{ marginRight: "5px" }} />
            <span> LOGOUT</span>
          </span>
        </Button>
      </div>
    </div>
  );
}
export default OwnerNav;

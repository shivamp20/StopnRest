import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import SignupModal from "../Modals/Signup/Signup";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const email = window.localStorage.getItem("email");
    const token = window.localStorage.getItem("token");
    if (email || token) {
      setUserLoggedIn(true);
    }
  }, []);
  const linkstyle = { textDecoration: "none", color: "#fff" };
  const logoutHandler = () => {
    setUserLoggedIn(false);
    window.localStorage.clear();
    navigate("/");
  };
  return (
    <div className="nav">
      <Link to="/" style={linkstyle}>
        <img src="./logo_thumbnail.png" alt="" />
      </Link>
      {!userLoggedIn && <SignupModal setUserLoggedIn={setUserLoggedIn} />}
      {userLoggedIn && (
        <div className="navDiv">
          <Link style={linkstyle} to="/userDashboard">
            My Profile
          </Link>
          <button type="button" className="nav_logout" onClick={logoutHandler}>
            <LogoutIcon /> LOGOUT
          </button>
        </div>
      )}
    </div>
  );
}
export default Navbar;

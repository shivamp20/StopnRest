import React from "react";
import DrawerWrapper from "../Wrapper/DrawerWrapper";
import ParticleBackground from "react-particle-backgrounds";
import EditIcon from "@mui/icons-material/Edit";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Dashboard() {
  const linkstyle = { textDecoration: "none" };
  const settings = {
    canvas: {
      canvasFillSpace: true,
      width: 200,
      useBouncyWalls: false,
    },
    particle: {
      particleCount: 150,
      color: "#4eacfd",
      minSize: 2,
      maxSize: 5,
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 0.5,
      maxSpeed: 1.5,
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 3000,
    },
  };
  return (
    <DrawerWrapper>
      <div className="dbMain">
        <div className="db-particle">
          <ParticleBackground settings={settings} />
        </div>
        <div className="db-content">
          <div className="db-cont">
            <div className="db-info">
              <h2>Welcome Owner</h2>
              <p>Update the details of your property: </p>
              <Link to="/addProperty" style={linkstyle}>
                <span className="db-button">
                  <EditIcon />
                  EDIT
                </span>
              </Link>
              <div className="db-foot">
                <p>In case of any queries, reach out to our support</p>
                <Link to="/support" style={linkstyle}>
                  <span>Support</span>
                </Link>
                <div className="db-foot-2">
                  <span> All rights reserved. © Stop-n-Rest</span>
                  <div className="social-icons">
                    <GoogleIcon style={{ color: "#4eacfd" }} />
                    <FacebookIcon style={{ color: "#4eacfd" }} />
                    <InstagramIcon style={{ color: "#4eacfd" }} />
                  </div>
                </div>
              </div>
            </div>
            <img
              src="https://images.pexels.com/photos/3355732/pexels-photo-3355732.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
      </div>
    </DrawerWrapper>
  );
}

export default Dashboard;

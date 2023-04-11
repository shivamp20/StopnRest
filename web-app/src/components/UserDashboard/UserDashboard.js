import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import "./userDashboard.css";
import {useNavigate } from "react-router-dom";
import MainWrapperWithoutSearch from "../Wrapper/MainWrapperWithoutSearch";
import UserProfileForm from "../UserProfileForm/UserProfileForm";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import hotelImage from "./hotelimg.webp";
import axios from "axios";
import toast from "react-hot-toast";

function UserDashboard() {
  const [userData, setUserData] = useState();
  const [latestBooking, setLatestBooking] = useState();
  const navigate = useNavigate();
  const headStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3rem",
    color: "#008CFF",
  };
  useEffect(() => {
    const load = async () => {
      try {
        const email = window.localStorage.getItem("email");
        if (email) {
          const [response, response2] = await Promise.all([
            await axios.get(`http://localhost:8080/api/guestProfile/${email}`),
            await axios.get(
              `http://localhost:8080/api/booking/latest/${email}`
            ),
          ]);

          if (response.status === 200) {
            setUserData(response.data);
          }
          if (response2.status === 200) {
            setLatestBooking(response2.data);
          }
        }
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong");
      }
    };
    load();
  }, []);
  
  return (
    <MainWrapperWithoutSearch>
      <div className="ud_main">
        {userData && <UserProfileForm data={userData} />}
      </div>
      {/* <div className="userwelcome">
        <Typography style={headStyle}>Welcome to Stop and Rest !!!!</Typography>
      </div> */}
      <div className="midbanner"></div>
      <div className="bookinghead">
        <br />
        <Typography style={headStyle}>Your Booking History</Typography>
      </div>
      <br /> <br />
      <div className="bookhistorycard">
        <Card sx={{ width: 445, height: "25rem", border: "2px solid black" }}>
          <CardMedia
            component="img"
            height="190"
            image={hotelImage}
            alt="green iguana"
          />
          <CardContent sx={{ marginLeft: "4rem" }}>
            <Typography gutterBottom variant="h4" component="div">
              {latestBooking?.hotelName}
            </Typography>
            <Typography variant="h6" color="black">
              {latestBooking?.address}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="medium"
              variant="contained"
              color="primary"
              sx={{ marginLeft: "4rem" }}
              onClick={()=> navigate('/')}
            >
              Go to Home
            </Button>
          </CardActions>
        </Card>
      </div>
      <br />
    </MainWrapperWithoutSearch>
  );
}
export default UserDashboard;

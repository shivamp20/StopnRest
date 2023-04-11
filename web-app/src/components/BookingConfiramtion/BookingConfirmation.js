import React from "react";
import "./booking.css";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import { Avatar, Button, Typography } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import HotelIcon from "@mui/icons-material/Hotel";
import SearchIcon from "@mui/icons-material/Search";
import MainWrapperWithoutSearch from "../Wrapper/MainWrapperWithoutSearch";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid, Paper } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";

function BookingConfirmation() {
  const navigate = useNavigate();
  const { state } = useLocation(); //getting the state here from the previous component

  return (
    <MainWrapperWithoutSearch>
      <div className="bc_main">
        <div className="bc_main_d_1"></div>
        <div className="bc_main_d_2"></div>
        <div className="bc_main_d_3"></div>
        <div className="bc_main_d_4"></div>
        <div className="bc_info">
          <div className="bc_info_head">
            <h2>
              Booking Confirmed
              <DoneAllIcon style={{ width: "50px", height: "50px" }} />
            </h2>
          </div>
          <p>
            Congratulations {state?.name}!!! Your booking is confirmed with{" "}
            <span style={{ color: "#008cff", fontWeight: "bold" }}>
              {state?.hotelName}
            </span>{" "}
            through Stop-n-Rest. Please check your mail for the detailed email
            regarding your booking.
          </p>
          <div className="bc_info_ow">
            <h6>Booking Overview</h6>
            <p>{state?.name}</p>
            <div className="bc_info_div">
              <div>
                Total Rooms: <br /> 1
              </div>
              <div>
                Total Guests: <br /> {state?.guest || 5}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              navigate("/userDashboard", { state: { state } });
            }}
          >
            Go to Profile
          </button>
        </div>
        <img
          src="https://img.freepik.com/free-vector/confirmed-concept-illustration_114360-416.jpg?w=2000"
          alt=""
        />
      </div>
    </MainWrapperWithoutSearch>
  );
}

export default BookingConfirmation;

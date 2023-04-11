import React from "react";
import "./HotelListing.css";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/material/styles";
import HotelListingCard from "./HotelListingCard";
import MainNav from "./MainNav";
import AppBarComponent from "./AppBar";
import axios from "axios";
import { useState, useEffect } from "react";
import MainWrapperWithSearch from "../Wrapper/MainWrapperWithSearch";
import { endPointUrl } from "../../controller";
//image size inside the card
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
function HotelListing(props) {
  const [HotelData, setData] = useState([]);
  const [HotelDataNew, setHotelData] = useState([]);
  const params = new URLSearchParams(window.location.search);
  const getLocationByData = async () => {
    const location = params.get("location");
    try {
      await axios
        // .get(`http://localhost:3000/HotelsData?city=${location}`)
        .get(`http://localhost:8080/api/getPropertyByLocation/${location}`)

        .then((res) => {
          setData(res.data.data);
          setHotelData(res.data.data);
        });
    } catch (err) {
      console.log(err);
    }
  };
  // const getData = async () => {
  //   try {
  //     // await axios.get(`http://localhost:3000/HotelsData`).then((res) => {
  //     await axios.get(`http://localhost:8080/api/getProperty`).then((res) => {

  //     // await axios.get(`${endPointUrl}/properties`).then((res) => {
  //       // http://localhost:8087/v1/api/properties
  //       setData(res.data.data);
  //       setHotelData(res.data.data);
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  // console.log(props.getByLocation);
  useEffect(() => {
    // if (location) {
    //   getLocationByData();
    // } else {
    //   getData();
    // }
    getLocationByData();
  }, []);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <MainWrapperWithSearch>
        <Box sx={{ display: "flex" }}>
          {/* <Navbar/> */}
          <CssBaseline />
          <div className="nav-card">
            <AppBarComponent handleDrawerToggle={handleDrawerToggle} />
            <MainNav
              setData={setData}
              HotelDataNew={HotelData}
              HotelData={HotelDataNew}
              mobileOpen={mobileOpen}
              setMobileOpen={setMobileOpen}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                boxSizing: "border-box",
                width: "100%",
              }}
            >
              {HotelData.map((data) => (
                <HotelListingCard data={data} />
              ))}
            </div>
          </div>
        </Box>
      </MainWrapperWithSearch>
    </>
  );
}
export default HotelListing;

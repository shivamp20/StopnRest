import React from "react";
import "./HotelListing.css";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import TvIcon from "@mui/icons-material/Tv";
import BedIcon from "@mui/icons-material/Bed";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { useNavigate } from "react-router-dom";
import PropertyDetails from "../PropertyDetails/PropertyDetails";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
const drawerWidth = 400; //sidenav
export default function HotelListingCard(props) {
  const images1 = props.data.images && props.data.images.length>0 && props.data.images.map((item) => {
    return item;
  });
  // <img src = {"data:image/png;base64,"+value.productImage1.data} className= "card-img-top" alt="tractor" style={{height:"12rem"}}/>
  const images = images1?.map((image) => {
    console.log(image)
    var path = require(`../../uploads/${image}`)
    // console.log(path)
    return {
      original: `${path}`,
      thumbnail: `${path}`,
    };
  });
  // console.log(images)
  const navigate = useNavigate();
  const productDetails = (data,images) => {
    // <PropertyDetails {...images}/>
    navigate("/detailview", { state: data }); //passing the state here to next component
    
  };
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
    >
      <Toolbar />
      <div className="card-content">
        <Paper
          sx={{
            p: 2,
            marginTop: -6,
            // margin: 'auto',
            boxShadow: 3,
            // maxWidth: 1700,
            height: 390,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <div className="card-section">
            <div className="carousel">
              {images && <ImageGallery items={images} />}
            </div>
            <Grid item xs={12} sm container>
              <Grid
                item
                xs
                container
                direction="column"
                spacing={2}
                justifyContent="flex-start"
                alignItems="flex-start"
                marginLeft={1}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  component="div"
                  style={{ paddingTop: "2px" }}
                >
                  {props.data.name}
                </Typography>
                {/* <Typography fontWeight='bold' style={{marginLeft:'750px',marginTop:'-20px',color:'red'}}>All Staff Are Vaccinated</Typography> */}
                <Typography variant="body1" gutterBottom>
                  {props.data.address}, {props.data.city}
                </Typography>
                <div className="starcontent">
                  <div className="starandvalue">
                    <Typography variant="subtitle1">3.5</Typography>
                    <StarIcon
                      variant="subtitle1"
                      style={{ paddingLeft: "1px" }}
                    />
                  </div>
                  <div className="numrating">
                    <Typography
                      variant="subtitle1"
                      style={{ paddingLeft: "5px" }}
                    >
                      (10 ratings) .fair
                    </Typography>
                  </div>
                </div>
                <div className="eminities">
                  <ul>
                    <div className="eminityiconfirst">
                      <li>
                        {" "}
                        <AcUnitIcon />
                      </li>
                      <li style={{ paddingLeft: "5px" }}>AC</li>
                    </div>
                    <div className="eminityicon">
                      <li>
                        {" "}
                        <TvIcon />
                      </li>
                      <li style={{ paddingLeft: "5px" }}>Tv</li>
                    </div>
                    <div className="eminityicon">
                      <li>
                        <BedIcon />
                      </li>
                      <li style={{ paddingLeft: "5px" }}>QueenSize Bed</li>
                    </div>
                    <div className="eminityicon">
                      <li> +6 more</li>
                    </div>
                  </ul>
                </div>
                <div className="lastrow">
                  <div className="pricerow">
                    <h3 style={{ color: "red", marginTop: "26px" }}>
                      ₹{props.data.offerprice}
                    </h3>
                    <Typography
                      variant="body1"
                      style={{
                        textDecoration: "line-through",
                        marginTop: "32px",
                        marginLeft: "10px",
                        opacity: "0.8",
                      }}
                    >
                      {props.data.actualprice}
                    </Typography>
                    <h3
                      style={{
                        marginTop: "26px",
                        marginLeft: "10px",
                        color: "orange",
                        width: "101px",
                      }}
                    >
                      {props.data.offerPercentage}% off
                    </h3>
                  </div>
                  <div>
                    <Stack
                      spacing={2}
                      direction="row"
                      className="priceList-row"
                    >
                      <Button
                        variant="outlined"
                        onClick={() => productDetails(props.data)}
                        
                      >
                        View Details
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => {
                          navigate("/bookingForm", { state: props.data });
                        }}
                      >
                        Book Now
                      </Button>
                    </Stack>
                  </div>
                </div>
                <div className="bottomline">
                  <Typography style={{ opacity: "0.7" }}>
                    per room per night
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </div>
    </Box>
  );
}

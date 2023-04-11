import React from "react";
import Typography from "@mui/material/Typography";
import Carousel from "react-elastic-carousel";
import "./PropertyDetails.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import TvIcon from "@mui/icons-material/Tv";
import BedIcon from "@mui/icons-material/Bed";
import { Grid } from "@material-ui/core";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";
import MainWrapperWithoutSearch from "../Wrapper/MainWrapperWithoutSearch";

function PropertyDetails(props) {
  const { state } = useLocation(); //getting the state here from the previous component
  // const images = useLocation();
  const navigate = useNavigate();
  console.log(state.images)
  // console.log(props.data)

  ///////check here----

  

  const images1 = state.images && state.images.length>0 && state.images.map((item) => {
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
  console.log(images[0].original)
  

  return (
    <MainWrapperWithoutSearch>
      <div className="pro">
        <Carousel itemsToShow={2} initialActiveIndex={0}>
          <div>
            <img src={images[0].original} alt=""></img>
          </div>
          <div>
            <img src={images[1].original} alt=""></img>
          </div>
          <div>
            <img src={images[2].original} alt=""></img>
          </div>
          {/* <div>
            <img src={images[3].original} alt=""></img>
          </div> */}
          <div>
          {/* <img src="/home/shivam/Documents/StopNrest_backend/stop-n-rest/web-app/src/uploads/IMAGE-1666348409528.jpg"></img> */}

          </div>
          

        </Carousel>

        <Grid>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography variant="h4" fontWeight="bold" component="div">
                  {state.name}
                </Typography>
                <br />
                <div className="located">
                  <Typography variant="body1" component="div">
                    {state.address}
                  </Typography>{" "}
                </div>
                <br />
                <div className="check">
                  <Typography variant="body1" component="div">
                    3.5 <StarIcon sx={{ fontSize: "small" }} /> &nbsp;check in
                    rating &gt; Delightful experience
                  </Typography>{" "}
                </div>
                <br />
                <div className="comp">
                  <Typography variant="body1" component="div">
                    <FavoriteBorderIcon sx={{ fontSize: "small" }} /> Couple
                    Friendly | Complementary Breakfast
                  </Typography>
                </div>
                <div className="desc">
                  <Typography variant="h6" fontWeight="bold" component="div">
                    Description
                  </Typography>
                </div>
                <div className="dis">
                  <Typography variant="body2" component="div">
                    <p>
                      Located in the heart of city,Hotel is a premium hotel for
                      stylish experiences. The hotel has an in-house restaurant,
                      CCTV cameras and breakfast facilities.
                    </p>
                  </Typography>
                </div>
                <br />
                <div className="ami">
                  <Typography variant="h6" fontWeight="bold" component="div">
                    Amenities
                  </Typography>
                </div>
                <div className="eminities">
                  <ul>
                    <div className="eminityiconfirst">
                      <li>
                        {" "}
                        <AcUnitIcon />
                      </li>
                      <li>AC</li>
                    </div>
                    <div className="eminityicon">
                      <li>
                        {" "}
                        <TvIcon />
                      </li>
                      <li>Tv</li>
                    </div>
                    <div className="eminityicon">
                      <li>
                        <BedIcon />
                      </li>
                      <li>QueenSize Bed</li>
                    </div>
                    <div className="eminityicon">
                      <li> +6 more</li>
                    </div>
                  </ul>
                </div>

                <div className="policy">
                  <Typography variant="h6" fontWeight="bold" component="div">
                    Hotel Policies
                  </Typography>
                </div>
                <div className="checkin">
                  <div className="ck">
                    <Typography variant="body1" component="div">
                      Check-in 12:00 PM
                    </Typography>
                  </div>
                  <div className="ck">
                    <Typography variant="body1" component="div">
                      Check-out 11:00 AM
                    </Typography>
                  </div>
                </div>
                <div className="list">
                  <Typography variant="body1" component="div">
                    <li>Only Indian Nationals allowed</li>
                    <li>
                      Guests can check in using any local or outstation ID proof
                      (PAN card not accepted).
                    </li>
                    <li>
                      As a complimentary benefit, your stay is now insured by
                      Acko.
                    </li>
                    <li>
                      This hotel is serviced under the trade name of SIn
                      Residency as per quality standards of Stay and Rest
                    </li>
                    <li>Couples are welcome.</li>
                  </Typography>
                </div>

                <div className="button">
                  <Button
                    variant="contained"
                    onClick={() => {
                      navigate("/bookingForm", { state: state });
                    }}
                  >
                    Continue Booking
                  </Button>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </div>
    </MainWrapperWithoutSearch>
  );
}

export default PropertyDetails;

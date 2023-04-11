import React from "react";
import "./homepage.css";
import inImg from "./hotel_room.jpeg";
import qrcode from "./qrcode.jpg";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import MainWrapperWithSearch from "../Wrapper/MainWrapperWithSearch";
import ParticleBackground from "react-particle-backgrounds";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import SellIcon from "@mui/icons-material/Sell";


function Homepage() {
  const settings = {
    canvas: {
      canvasFillSpace: true,
      width: 200,
      useBouncyWalls: false,
    },
    particle: {
      particleCount: 200,
      color: "#4EACFD",
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
    <MainWrapperWithSearch>
      <>
        <div className="img_div"></div>
        <div className="topcontainer">
          <Card className="card1">
            <CardMedia
              component="img"
              height="260"
              image={inImg}
              alt="green iguana"
            />
            {/* <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Tajhmahal the Wonder
                </Typography>
               
                </CardContent> */}
          </Card>
          

          <Card
            style={{
              border: "none",
              boxShadow: "none",
              backgroundColor: "#F2F2F2",
            }}
          >
          
            <CardContent className="card2">
              <Typography gutterBottom variant="h4" component="div">
                <div className="earnreward">
                  Pehli Booking Ke <br />
                  liye Karo pack.
                  <br />
                  <br />
                  <div className="cashback">
                    Earn 100% S&R <br />
                    Money cashback
                  </div>
                </div>
              </Typography>
            </CardContent>
          </Card>

          <div className="cardcont">
            <Card
              className="card3"
              style={{
                border: "none",
                boxShadow: "none",
                backgroundColor: "#F2F2F2",
              }}
            >
              <CardMedia
                // style={imgstyle}
                component="img"
                className="qrcode"
                image={qrcode}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <div className="qrtext">Scan to Download</div>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="hp_main">
          <div className="hp_1">
            <div className="db-particle">
              <ParticleBackground settings={settings} />
            </div>
            <div className="hp_1_card">
              <div className="hp_1_card_info">
                <div className="hp_1_card_info_bub_1">&nbsp;</div>
                <div className="hp_1_card_info_bub_2">&nbsp;</div>
                <div className="hp_1_card_info_bub_3">&nbsp;</div>
                <h2>Our Goal</h2>
                <p>Unique spaces with familiar touches.</p>
                <p>Personalized Experience.</p>
                <p>Technology Assisted.</p>
                <p>Clean & Safe.</p>
                <button type="button">
                  Know More <ArrowRightAltIcon />{" "}
                </button>
              </div>
              <div className="hp_1_card_imgD">
                <img
                  src="https://images.pexels.com/photos/1770310/pexels-photo-1770310.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="hp_1_img"
                />
              </div>
            </div>
          </div>
          <div className="hp_1">
            <div className="db-particle">
              <ParticleBackground settings={settings} />
            </div>
            <div className="hp_1_card">
              <div className="hp_2_card_imgD">
                <img
                  src="https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="hp_2_img"
                />
              </div>
              <div className="hp_1_card_info">
                <div className="hp_1_card_info_bub_4">&nbsp;</div>
                <div className="hp_1_card_info_bub_5">&nbsp;</div>
                <h2>About Us</h2>
                <p>
                  Stop-n-Rest is the world leader in online travel & related
                  services. We make your travel and stay easy, fun, and safe. So
                  what are you waiting for? Book your first stay with
                  stop-n-Rest and get one night's stay free.
                </p>
                <button type="button">
                  Book Now <ArrowRightAltIcon />{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="hp_au">
            <div className="hp_au_main">
              <h2>WHY US?</h2>
              <div className="hp_au_main_cont">
                <div className="hp_au_main_cont_card">
                  <SupportAgentIcon
                    style={{ width: "50px", height: "50px", color: "#008CFF" }}
                  />
                  <h5>24/7 Support</h5>
                  <p>
                    We provide you with 24/7 assistence to ensure you that you
                    have a happy stay.
                  </p>
                </div>
                <div className="hp_au_main_cont_card">
                  <SanitizerIcon
                    style={{ width: "50px", height: "50px", color: "#008CFF" }}
                  />
                  <h5>Safety First Approach</h5>
                  <p>
                    We at Stop-n-Rest believe in a safe stay for our users. All
                    the hotels listed on our platform are well sanitized.
                  </p>
                </div>
                <div className="hp_au_main_cont_card">
                  <SellIcon
                    style={{ width: "50px", height: "50px", color: "#008CFF" }}
                  />
                  <h5>Great Offers</h5>
                  <p>
                    Along with safe and happy stay, we want to provide our users
                    with a affordable stay as well.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MainWrapperWithSearch>
  );
}

export default Homepage;

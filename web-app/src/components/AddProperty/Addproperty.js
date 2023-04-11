import React, { useEffect, useRef, useState } from "react";
import ImageUploading from "react-images-uploading";

import "./property.css";
import axios from "axios";

import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Typography } from "@mui/material";
import DrawerWrapper from "../Wrapper/DrawerWrapper";
import toast from "react-hot-toast";
import { Navigate } from "react-router";

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "100%",
    margin: theme.spacing(1, 0),
  },
}));

function Addproperty() {
  const classes = useStyles();
  const [Images, setImages] = React.useState([]);
  const maxNumber = 69;
  const [name, setPropertyName] = useState("");
  const [address, setaddress] = useState("");
  const [actualprice, setPricePerNight] = useState(0);
  const [offerPercentage, setofferPercentage] = useState(0);
  const [offerprice, setOfferPrice] = useState(0);
  const [hotel, setHotel] = useState(false);
  const [hostel, setHostel] = useState(false);
  const [AC, setAC] = useState(false);
  const [TV, setTV] = useState(false);
  const [QueenSize_Bed, setBED] = useState(false);
  const [Elevator, setElevator] = useState(false);
  const [Reception, setReception] = useState(false);
  const [Free_Wifi, setWIFI] = useState(false);
  const [Parking_Facility, setparking] = useState(false);
  const [Power_backup, setpower] = useState(false);
  const [CCTV_Cameras, setCCTV] = useState(false);
  const [Refrigerator, setrefrigerator] = useState(false);
  const [Seating_Area, setseatarea] = useState(false);
  const [Local_ID_accepted, setlocalid] = useState(false);
  const [Hotels_Welcomes_Couples, setcouples] = useState(false);
  const [Family_Hotel, setfamily] = useState(false);
  const [checkInFeature, setcheckin] = useState(false);
  const [totalroom, settotalroom] = useState(0);
  const [city, setcity] = useState("");
  const textStyle = {
    fontSize: "1.5rem",
    color: "#008cff",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bolder",
  };
  const buttonStyle = {
    margin: "0 29rem",
    height: "4vh",
    width: "9rem",
  };

  var amenities = [
    {
      id: 1,
      amenity: "Ac",
      available: AC,
    },
    {
      id: 2,
      amenity: "Tv",
      available: TV,
    },
    {
      id: 3,
      amenity: "QueenSize_Bed",
      available: QueenSize_Bed,
    },
    {
      id: 4,
      amenity: "Reception",
      available: Reception,
    },
    {
      id: 5,
      amenity: "Free_Wifi",
      available: Free_Wifi,
    },
    {
      id: 6,
      amenity: "Parking_Facility",
      available: Parking_Facility,
    },

    {
      id: 7,
      amenity: "Power_backup",
      available: Power_backup,
    },
    {
      id: 8,
      amenity: "CCTV_Cameras",
      available: CCTV_Cameras,
    },
    {
      id: 9,
      amenity: "Elevator",
      available: Elevator,
    },
    {
      id: 10,
      amenity: "Refrigerator",
      available: Refrigerator,
    },
    {
      id: 11,
      amenity: "Seating_Area",
      available: Seating_Area,
    },
  ];

  var AccomodationType = [
    {
      id: 1,
      type: "Hotels",
      availability: hotel,
    },
    {
      id: 2,
      type: "Hostels",
      availability: hostel,
    },
  ];

  var checkInFeatures = [
    {
      id: 1,
      checkInFeature: "payAtHotel",
      available: checkInFeature,
    },
  ];

  var numberOfRooms = totalroom;

  var Collections = [
    {
      id: "1",
      Collection: "Family_Hotel",
      available: Family_Hotel,
    },
    {
      id: "2",
      Collection: "Local_ID's_accepted",
      available: Local_ID_accepted,
    },
    {
      id: "3",
      Collection: "Hotels_Welcomes_Couples",
      available: Hotels_Welcomes_Couples,
    },
  ];

  const formDataObj = {};

  const handleChange = (imageList) => {
    setImages(imageList);
  };
  ////handle form data

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    var images={}

    for (var i = 0; i < Images.length; i++) {
      formdata.append("image", Images[i].file);
    }

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
    };
    await axios
      .post("http://localhost:8080/api/upload", formdata, config)
      .then(async (response) => {
        images = response.data
        console.log(images)
        
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .post(
        "http://localhost:8080/api/addproperty",
        {
          name,
          city,
          address,
          actualprice,
          offerPercentage,
          offerprice,
          images,
          numberOfRooms,
          checkInFeatures,
          amenities,
          AccomodationType,
          Collections,
          ownerEmail: window.localStorage.getItem("email"),
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setTimeout(() => {
      toast.success("Property added successfully.");
    }, 2000);

    // e.target.reset();
  };

  return (
    < DrawerWrapper>

    <div className="box">
      <form onSubmit={handleSubmit} id="form">
        <br />
        <br />
        <Typography style={textStyle}>
          Upload Image of Your property:
        </Typography>
        <br />
        <ImageUploading
          multiple
          value={Images}
          onChange={handleChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
          name="image"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <Button
                onClick={onImageUpload}
                variant="contained"
                color="primary"
                {...dragProps}
              >
                Select Files
              </Button>
              <br />
              <br />
              <br />
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image["data_url"]} alt="" width="200" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>

        <br />
        <br />

        <TextField
          placeholder="Enter Your Property Name"
          label="Hotel Name"
          variant="outlined"
          fullWidth
          className={classes.inputField}
          value={name}
          onChange={(e) => setPropertyName(e.target.value)}
          required={true}
          name="name"
        />
        <div className="addressGrid">
          <TextField
            placeholder="Enter Your City"
            label="Provide City"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            value={city}
            onChange={(e) => setcity(e.target.value)}
            required={true}
            name="city"
          />

          <TextField
            placeholder="Enter Your Property Address"
            label="Property Address"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            value={address}
            onChange={(e) => setaddress(e.target.value)}
            required={true}
            name="address"
          />
        </div>
        <br />

        <div className="pricegrid">
          <TextField
            placeholder="Enter Price"
            label="Original Price"
            variant="outlined"
            type="number"
            fullWidth
            className={classes.inputField}
            value={actualprice}
            onChange={(e) => setPricePerNight(e.target.value)}
            required={true}
            name="pricePerNight"
          />

          <TextField
            placeholder="Enter Offer Percentage"
            label="Offer percent"
            variant="outlined"
            type="number"
            fullWidth
            className={classes.inputField}
            value={offerPercentage}
            onChange={(e) => setofferPercentage(e.target.value)}
            required={true}
            name="offerPercent"
          />

          <TextField
            placeholder="Discounted Price"
            label="Price after offer"
            variant="outlined"
            type="number"
            fullWidth
            className={classes.inputField}
            value={offerprice}
            onChange={(e) => setOfferPrice(e.target.value)}
            required={true}
            name="offerprice"
          />

          <TextField
            placeholder="Total rooms"
            label="Total Rooms"
            variant="outlined"
            type="number"
            fullWidth
            className={classes.inputField}
            value={totalroom}
            onChange={(e) => settotalroom(e.target.value)}
            required={true}
            name="offerprice"
          />
        </div>
        <br />
        <br />
        <Typography style={textStyle}>Accomadation Type:</Typography>
        <FormControlLabel
          style={{ display: "block", marginBottom: 15 }}
          control={
            <Checkbox
              value={hotel}
              onChange={(e) => setHotel(e.target.checked)}
            />
          }
          label="Hotel"
        />

        <FormControlLabel
          style={{ display: "block", marginBottom: 15 }}
          control={
            <Checkbox
              value={hostel}
              onChange={(e) => setHostel(e.target.checked)}
            />
          }
          label="Hostel"
        />

        <Typography style={textStyle}>Check-In Feature:</Typography>
        <FormControlLabel
          style={{ display: "block", marginBottom: 15 }}
          control={
            <Checkbox
              value={checkInFeature}
              onChange={(e) => setcheckin(e.target.checked)}
            />
          }
          label="Check-In"
        />

        <Typography style={textStyle}>Ammenities:</Typography>

        <div className="ammenitiesgrid">
          <FormControlLabel
            style={{ display: "block", marginBottom: 15 }}
            control={
              <Checkbox value={AC} onChange={(e) => setAC(e.target.checked)} />
            }
            label="AC"
          />
          <FormControlLabel
            style={{ display: "block", marginBottom: 15 }}
            control={
              <Checkbox value={TV} onChange={(e) => setTV(e.target.checked)} />
            }
            label="TV"
          />
          <FormControlLabel
            style={{ display: "block", marginBottom: 15 }}
            control={
              <Checkbox
                value={QueenSize_Bed}
                onChange={(e) => setBED(e.target.checked)}
              />
            }
            label="QueenSize Bed"
          />
          <FormControlLabel
            style={{ display: "block", marginBottom: 15 }}
            control={
              <Checkbox
                value={Free_Wifi}
                onChange={(e) => setWIFI(e.target.checked)}
              />
            }
            label="Free Wifi"
          />
          <FormControlLabel
            style={{ display: "block", marginBottom: 15 }}
            control={
              <Checkbox
                value={Parking_Facility}
                onChange={(e) => setparking(e.target.checked)}
              />
            }
            label="Parking Facility"
          />
          <FormControlLabel
            style={{ display: "block", marginBottom: 15 }}
            control={
              <Checkbox
                value={Power_backup}
                onChange={(e) => setpower(e.target.checked)}
              />
            }
            label="Power Backup"
          />

          <FormControlLabel
            style={{ display: "block", marginBottom: 15 }}
            control={
              <Checkbox
                value={Reception}
                onChange={(e) => setReception(e.target.checked)}
              />
            }
            label="Reception"
          />

          <FormControlLabel
            style={{ display: "block", marginBottom: 15 }}
            control={
              <Checkbox
                value={CCTV_Cameras}
                onChange={(e) => setCCTV(e.target.checked)}
              />
            }
            label="CCTV Camera"
          />

          <FormControlLabel
            style={{ display: "block", marginBottom: 15 }}
            control={
              <Checkbox
                value={Elevator}
                onChange={(e) => setElevator(e.target.checked)}
              />
            }
            label="Elevator"
          />
        </div>
        <Typography style={textStyle}>Hotel Facilities:</Typography>

        <div className="facilities">
          <FormControlLabel
            style={{ display: "block", marginBottom: 15 }}
            control={
              <Checkbox
                value={Refrigerator}
                onChange={(e) => setrefrigerator(e.target.checked)}
              />
            }
            label="Refrigerator"
          />

          <FormControlLabel
            style={{ display: "block", marginBottom: 15 }}
            control={
              <Checkbox
                value={Seating_Area}
                onChange={(e) => setseatarea(e.target.checked)}
              />
            }
            label="Seating Area"
          />
        </div>

        <Typography style={textStyle}>Collections:</Typography>

        <div className="facilities">
          <FormControlLabel
            style={{ display: "block", marginBottom: 15 }}
            control={
              <Checkbox
                value={Family_Hotel}
                onChange={(e) => setfamily(e.target.checked)}
              />
            }
            label="Family Hotels"
          />

          <FormControlLabel
            style={{ display: "block", marginBottom: 15 }}
            control={
              <Checkbox
                value={Local_ID_accepted}
                onChange={(e) => setlocalid(e.target.checked)}
              />
            }
            label="Local IDs accepted"
          />

          <FormControlLabel
            style={{ display: "block", marginBottom: 15 }}
            control={
              <Checkbox
                value={Hotels_Welcomes_Couples}
                onChange={(e) => setcouples(e.target.checked)}
              />
            }
            label="Couples allowed"
          />
        </div>

        <Button
          variant="contained"
          type="submit"
          style={buttonStyle}
          color="primary"
        >
          SUBMIT
        </Button>
      </form>
    </div>
    </DrawerWrapper>
  );
}

export default Addproperty;

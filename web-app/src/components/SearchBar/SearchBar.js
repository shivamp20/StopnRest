import React, { useEffect, useState } from "react";
import Select from "react-select";
import "./SearchBar.css";
import { DateRangePicker, Input, InputNumber } from "rsuite";
import { GetHotelsByLocation } from "../HotelListing/HotelListing";
import { useNavigate } from "react-router-dom";

const options = [
  { value: "Bangalore", label: "Bangalore" },
  { value: "vizag", label: "Vizag" },
  { value: "Mumbai", label: "Mumbai" },
];

const styles = {
  control: (provided, state) => ({
    ...provided,
    width: "100%",
    height: "43px",
  }),
  option: (provided, state) => ({
    ...provided,
    color:"black",
  }),
  menu:(provided, state) => ({
    ...provided,
    zIndex:1000
  })
};

const datestyles = {
  backgroundColor: "#fff",
  borderRadius: "5px",
};

const numberStyles = {
  width: "100%",
  minWidth: "150px",
};

function SearchBar(props) {
  const params = new URLSearchParams(window.location.search);
  const location = params.get("location");
  const checkIn = params.get("checkIn");
  const checkOut = params.get("checkOut");
  const guests = params.get("guests");
  const navigate = useNavigate();
  const [nameValue, setNameValue] = useState(
    location
      ? {
          value: location,
          label: location,
        }
      : null
  );
  const [dateValue, setDateValue] = useState();
  const [numberValue, setNumberValue] = useState();
  
        
  const formSubmitHandler = (e) => {
    e.preventDefault();
    navigate(
      `/HotelListing?location=${nameValue.value}&checkIn=${dateValue[0]}&checkOut=${dateValue[1]}&guests=${numberValue}`
    );
  };

  const onSelectChange = (e) => {
    setNameValue(e);
    if (e !== null && e?.value) {
      props.setGetByLocation(e.value);
    } else {
      props.setGetByLocation("");
    }
  };

  return (
    <div className="main-cont">
      <p>
        Book properties online. Search for hotels by their location.
      </p>
      <form className="form-card" onSubmit={formSubmitHandler}>
        <div className="form-main">
          <div className="selector">
          <Select
        size="lg"
        placeholder="Search by city"
        value={nameValue}
        onChange={onSelectChange}
        styles={styles}
        isClearable={true}
         options={options} />
          </div>
      
          {/* <Input
            size="lg"
            placeholder="Search by name or city"
            value={nameValue}
            onChange={(e) => setNameValue(e)}
            style={styles}
          /> */}
          <div className="form-cont">
            <DateRangePicker
              size="lg"
              placeholder="Choose dates"
              onChange={(e) => setDateValue(e)}
              style={datestyles}
              defaultValue={
                checkIn && checkOut
                  ? [new Date(checkIn), new Date(checkOut)]
                  : []
              }
            />
            <InputNumber
              size="lg"
              placeholder="Total guests"
              min="1"
              onChange={(e) => setNumberValue(e)}
              style={numberStyles}
              defaultValue={guests}
            />
          </div>
        </div>
        <button
          className={
            !nameValue ? "searchButton searchButton-disabled" : "searchButton"
          }
          type="submit"
          disabled={!nameValue}
        >
          SEARCH
        </button>
      </form>
    </div>
  );
}

export default SearchBar;

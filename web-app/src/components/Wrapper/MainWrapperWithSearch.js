import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";

function MainWrapperWithSearch({ children,setGetByLocation }) {
  return (
    <>
     <div style={{position:"sticky", top:'0px', zIndex:100}}>
      <Navbar />
      </div>
      <SearchBar setGetByLocation={setGetByLocation} />
      {children}
      <Footer />
    </>
  );
}

export default MainWrapperWithSearch;

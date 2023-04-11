import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function MainWrapperWithoutSearch({ children }) {
  return (
    <>
     <div style={{ position: "sticky", top: "0px", zIndex: 100 }}>
        <Navbar />
      </div>
      {children}
      <Footer />
    </>
  );
}

export default MainWrapperWithoutSearch;

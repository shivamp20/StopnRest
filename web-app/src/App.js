import "./App.css";
import Homepage from "./components/HomePage/Homepage";
import Slider from "./components/Carousel/Slider";
import { Route, Routes } from "react-router-dom";
import HotelListing from "./components/HotelListing/HotelListing";
import BookingConfirmation from "./components/BookingConfiramtion/BookingConfirmation";
import PropertyDetails from "./components/PropertyDetails/PropertyDetails";
import MainWrapperWithoutSearch from "./components/Wrapper/MainWrapperWithoutSearch";
import { Toaster } from "react-hot-toast";
import SupportPage from "./components/SupportPage/SupportPage";
import BookingConfirmationForm from "./components/BookingConfirmationForm/BookingConfirmationForm";
import Dashboard from "./components/Dashboard/Dashboard";
import { Add } from "@mui/icons-material";
import Addproperty from "./components/AddProperty/Addproperty";
import OwnerNav from "./components/OwnerNav/OwnerNav";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import { Drawer } from "rsuite";
import DrawerWrapper from "./components/Wrapper/DrawerWrapper";
import OwnerProfile from "./components/OwnerProfile/OwnerProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/HotelListing" element={<HotelListing />}></Route>
        <Route path="/detailview" element={<PropertyDetails />}></Route>
        <Route
          path="/bookingform"
          element={<BookingConfirmationForm />}
        ></Route>
        <Route
          path="/bookingconfirmation"
          element={<BookingConfirmation />}
        ></Route>
        <Route path="/userDashboard" element={<UserDashboard />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/addProperty" element={<Addproperty />}></Route>
        <Route path="/support" element={<SupportPage />}></Route>
        <Route path="/ownerProfile" element={<OwnerProfile />}></Route>
      </Routes>
      {/* <Addproperty/> */}

      <Toaster />
    </div>
  );
}

export default App;

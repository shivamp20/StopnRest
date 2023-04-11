import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import OwnerProfileForm from "../OwnerProfileForm/OwnerProfileForm";
import DrawerWrapper from "../Wrapper/DrawerWrapper";
import "./OwnerProfile.css";

const OwnerProfile = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const load = async () => {
      try {
        const email = window.localStorage.getItem("email");
        if (email) {
          await axios
            .get(`http://localhost:8080/api/ownerProfile/${email}`)
            .then((response) => {
              setUserData(response.data);
            });
        }
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong");
      }
    };
    load();
  }, []);
  return (
    <DrawerWrapper>
      <div className="op_main">
        {userData && <OwnerProfileForm data={userData} />}
      </div>
    </DrawerWrapper>
  );
};
export default OwnerProfile;

import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { validationUserProfile } from "../Validation/validation";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import toast from "react-hot-toast";
import ParticleBackground from "react-particle-backgrounds";
import axios from "axios";
function OwnerProfileForm({ data }) {
  const settings = {
    canvas: {
      canvasFillSpace: true,
      width: 200,
      useBouncyWalls: false,
    },
    particle: {
      particleCount: 150,
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: data?.email,
      name: data?.name,
      number: data?.number,
      location: data?.location,
    },
    resolver: yupResolver(validationUserProfile),
  });
  const formSubmitHandler = async (userData) => {
    window.localStorage.setItem("email", data?.email);
    await axios
      .put(`http://localhost:8080/api/ownerProfile/update/${data?.email}`, {
        name: userData.name,
        location: userData.location,
        number: userData.number,
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Your profile is updated successfully");
        }
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };
  return (
    <div className="upf-main">
      {/* <div className="db-particle">
        <ParticleBackground settings={settings} />
      </div> */}
      <form className="upf-card" onSubmit={handleSubmit(formSubmitHandler)}>
        <div className="upf-card-avatar">
          <AccountCircleIcon
            style={{ width: "100%", height: "100%", padding: "0", margin: "0" }}
          />
        </div>
        <div className="upf-form">
          <div>
            <input type="text" placeholder="Name" {...register("name")} />
            {errors.name && (
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors?.name?.message}
              </span>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Email Address"
              {...register("email")}
              disabled
            />
            {errors.email && (
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors?.email?.message}
              </span>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Location"
              {...register("location")}
            />
            {errors.location && (
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors?.location?.message}
              </span>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Mobile Number"
              {...register("number")}
            />
            {errors.number && (
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors?.number?.message}
              </span>
            )}
          </div>
        </div>
        <button type="submit">SAVE</button>
        <p>
          By proceeding, you agree to Stop-N-Rest's
          <span> Terms and Conditions</span>
        </p>
      </form>
    </div>
  );
}
export default OwnerProfileForm;

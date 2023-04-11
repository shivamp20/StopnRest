import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import "./Signup.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { validationRegistration } from "../../Validation/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import PersonIcon from "@mui/icons-material/Person";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
};

export default function SignupModal({ setUserLoggedIn }) {
  const [open, setOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(1);
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [activeForm, setActiveForm] = React.useState(1);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const {
    register: lgRegister,
    handleSubmit: lgSubmitHandler,
    formState: { errors: lgErrors },
    reset: reset1,
  } = useForm({
    defaultValues: {},
    resolver: yupResolver(validationRegistration),
  });

  const {
    register: loRegister,
    handleSubmit: loSubmitHandler,
    formState: { errors: loErrors },
    reset: reset2,
  } = useForm({
    defaultValues: {},
    resolver: yupResolver(validationRegistration),
  });

  const {
    register: sgRegister,
    handleSubmit: sgSubmitHandler,
    formState: { errors: sgErrors },
    reset: reset3,
  } = useForm({
    defaultValues: {},
    resolver: yupResolver(validationRegistration),
  });

  const {
    register: soRegister,
    handleSubmit: soSubmitHandler,
    formState: { errors: soErrors },
    reset: reset4,
  } = useForm({
    defaultValues: {},
    resolver: yupResolver(validationRegistration),
  });

  const loginGuestSubmitHandler = async (data) => {
    setFormSubmitted(true);
    try {
      await axios
        .post("http://localhost:8080/api/login", {
          email: data.email,
          password: data.password,
          role: "GUEST",
        })
        .then((response) => {
          if (response.status === 200) {
            toast.success("Login successful.");
            window.localStorage.clear();
            window.localStorage.setItem("role", "GUEST");
            window.localStorage.setItem("email", data.email);
            setUserLoggedIn(true);
            handleClose();
          }
        });
    } catch (err) {
      toast.error(err.response.data.message);
      setFormSubmitted(false);
    }
  };
  const loginOwnerSubmitHandler = async (data) => {
    setFormSubmitted(true);
    try {
      await axios
        .post("http://localhost:8080/api/login", {
          email: data.email,
          password: data.password,
          role: "OWNER",
        })
        .then((response) => {
          if (response.status === 200) {
            toast.success("Login successful.");
            window.localStorage.clear();
            window.localStorage.setItem("role", "OWNER");
            window.localStorage.setItem("email", data.email);
            setUserLoggedIn(true);
            handleClose();
            navigate("/dashboard");
          }
        });
    } catch (err) {
      toast.error(err.response.data.message);
      setFormSubmitted(false);
    }
  };
  const signupGuestSubmitHandler = async (data) => {
    window.localStorage.clear();
    setFormSubmitted(true);
    try {
      await axios
        .post("http://localhost:8080/api/signup", {
          email: data.email,
          password: data.password,
          role: "GUEST",
        })
        .then(async (response) => {
          if (response.status === 200) {
            toast.success("Signup successful. Login to continue.");
            reset3();
            setActiveForm(1);
            setActiveTab(1);
            setFormSubmitted(false);
          }
        });
    } catch (err) {
      toast.error(err.response.data.message);
      setFormSubmitted(false);
    }
  };
  const signupOwnerSubmitHandler = async (data) => {
    window.localStorage.clear();
    setFormSubmitted(true);
    try {
      await axios
        .post("http://localhost:8080/api/signup", {
          email: data.email,
          password: data.password,
          role: "OWNER",
        })
        .then(async (response) => {
          if (response.status === 200) {
            toast.success("Signup successful. Login to continue.");
            reset4();
            setActiveForm(1);
            setActiveTab(2);
            setFormSubmitted(false);
          }
        });
    } catch (err) {
      toast.error(err.response.data.message);
      setFormSubmitted(false);
    }
  };
  const googleLoginHandler = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      window.localStorage.setItem("token", tokenResponse.access_token);
      window.localStorage.setItem("role", activeTab === 1 ? "GUEST" : "OWNER");
      setUserLoggedIn(true);
      handleClose();
      if (activeTab === 2) {
        navigate("/dashboard");
      }
    },
  });
  return (
    <div>
      <Button onClick={handleOpen}>
        <span className="main-text">
          <PersonIcon style={{ marginRight: "5px" }} />
          <span> Login / Signup</span>
        </span>
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {/* top section */}
            {activeForm === 1 && (
              <div className="cont">
                {/* top section */}
                <div className="top-card">
                  <h3 className="cont-header">LOGIN</h3>
                  <div className="buttonGroup">
                    <button
                      type="button"
                      className={activeTab === 1 ? "buttonGroup-active" : ""}
                      onClick={() => {
                        setActiveTab(1);
                        reset1();
                        reset2();
                      }}
                      disabled={formSubmitted}
                    >
                      Guest
                    </button>
                    <button
                      type="button"
                      className={activeTab === 2 ? "buttonGroup-active" : ""}
                      onClick={() => {
                        setActiveTab(2);
                        reset1();
                        reset2();
                      }}
                      disabled={formSubmitted}
                    >
                      Property Owner
                    </button>
                  </div>
                </div>
                {/* Form for guests*/}
                {activeTab === 1 && (
                  <form
                    className="loginForm"
                    onSubmit={lgSubmitHandler(loginGuestSubmitHandler)}
                  >
                    <input
                      type="text"
                      placeholder="Enter email"
                      {...lgRegister("email")}
                    />
                    {lgErrors.email && (
                      <span className="inputError">
                        {lgErrors.email.message}
                      </span>
                    )}
                    <input
                      type="password"
                      placeholder="Enter password"
                      {...lgRegister("password")}
                    />
                    {lgErrors.password && (
                      <span className="inputError">
                        {lgErrors.password.message}
                      </span>
                    )}
                    <button type="submit" disabled={formSubmitted}>
                      LOGIN
                    </button>
                  </form>
                )}
                {/* Form for owners */}
                {activeTab === 2 && (
                  <form
                    className="loginForm"
                    onSubmit={loSubmitHandler(loginOwnerSubmitHandler)}
                  >
                    <input
                      type="text"
                      placeholder="Enter email"
                      {...loRegister("email")}
                    />
                    {loErrors.email && (
                      <span className="inputError">
                        {loErrors.email.message}
                      </span>
                    )}
                    <input
                      type="password"
                      placeholder="Enter password"
                      {...loRegister("password")}
                    />
                    {loErrors.password && (
                      <span className="inputError">
                        {loErrors.password.message}
                      </span>
                    )}
                    <button type="submit" disabled={formSubmitted}>
                      LOGIN
                    </button>
                  </form>
                )}
                {/* Social Login */}
                <div className="social">
                  <p>----- or login with -----</p>
                  {/* <div className="social-icons">
                    <GoogleIcon style={{ color: "#4eacfd" }} />
                    <FacebookIcon style={{ color: "#4eacfd" }} />
                    <InstagramIcon style={{ color: "#4eacfd" }} />
                  </div> */}
                  <div className="social_google">
                    <button
                      type="button"
                      onClick={() => googleLoginHandler()}
                      style={{ background: "transparent", outline: "none" }}
                    >
                      <GoogleIcon style={{ color: "#4eacfd" }} />
                    </button>
                    ;
                  </div>
                  <p>
                    Don't have an account?{" "}
                    <span
                      onClick={() => {
                        setActiveForm(2);
                        reset1();
                        reset2();
                      }}
                      disabled={formSubmitted}
                    >
                      SIGNUP
                    </span>
                  </p>
                  <p>
                    By proceeding, you agree to Stop-N-Rest's
                    <span> Terms and Conditions</span>
                  </p>
                </div>
              </div>
            )}
            {activeForm === 2 && (
              <div className="cont">
                {/* top section */}
                <div className="top-card">
                  <h3 className="cont-header">SIGNUP</h3>
                  <div className="buttonGroup">
                    <button
                      type="button"
                      className={activeTab === 1 ? "buttonGroup-active" : ""}
                      onClick={() => {
                        setActiveTab(1);
                        reset3();
                        reset4();
                      }}
                      disabled={formSubmitted}
                    >
                      Guest
                    </button>
                    <button
                      type="button"
                      className={activeTab === 2 ? "buttonGroup-active" : ""}
                      onClick={() => {
                        setActiveTab(2);
                        reset3();
                        reset4();
                      }}
                      disabled={formSubmitted}
                    >
                      Property Owner
                    </button>
                  </div>
                </div>
                {/* Form for guests*/}
                {activeTab === 1 && (
                  <form
                    className="loginForm"
                    onSubmit={sgSubmitHandler(signupGuestSubmitHandler)}
                  >
                    <input
                      type="text"
                      placeholder="Enter email"
                      {...sgRegister("email")}
                    />
                    {sgErrors.email && (
                      <span className="inputError">
                        {sgErrors.email.message}
                      </span>
                    )}
                    <input
                      type="password"
                      placeholder="Enter password"
                      {...sgRegister("password")}
                    />
                    {sgErrors.password && (
                      <span className="inputError">
                        {sgErrors.password.message}
                      </span>
                    )}
                    <button type="submit" disabled={formSubmitted}>
                      SIGNUP
                    </button>
                  </form>
                )}
                {/* Form for owners */}
                {activeTab === 2 && (
                  <form
                    className="loginForm"
                    onSubmit={soSubmitHandler(signupOwnerSubmitHandler)}
                  >
                    <input
                      type="text"
                      placeholder="Enter email"
                      {...soRegister("email")}
                    />
                    {soErrors.email && (
                      <span className="inputError">
                        {soErrors.email.message}
                      </span>
                    )}
                    <input
                      type="password"
                      placeholder="Enter password"
                      {...soRegister("password")}
                    />
                    {soErrors.password && (
                      <span className="inputError">
                        {soErrors.password.message}
                      </span>
                    )}
                    <button type="submit" disabled={formSubmitted}>
                      SIGNUP
                    </button>
                  </form>
                )}
                {/* Social Login */}
                <div className="social">
                  <p>----- or signup with -----</p>
                  <div className="social-icons">
                    <GoogleIcon style={{ color: "#4eacfd" }} />
                    <FacebookIcon style={{ color: "#4eacfd" }} />
                    <InstagramIcon style={{ color: "#4eacfd" }} />
                  </div>
                  <p>
                    Already have an account?{" "}
                    <span
                      onClick={() => {
                        setActiveForm(1);
                        reset3();
                        reset4();
                      }}
                      disabled={formSubmitted}
                    >
                      LOGIN
                    </span>
                  </p>
                  <p>
                    By proceeding, you agree to Stop-N-Rest's
                    <span> Terms and Conditions</span>
                  </p>
                </div>
              </div>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

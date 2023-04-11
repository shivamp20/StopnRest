import { yupResolver } from "@hookform/resolvers/yup";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { validationBookingConfirmation } from "../Validation/validation";
import "./BookingConfirmationForm.css";
import PaymentIcon from "@mui/icons-material/Payment";
import MainWrapperWithoutSearch from "../Wrapper/MainWrapperWithoutSearch";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import toast from "react-hot-toast";

function BookingConfirmationForm() {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(eval((state?.offerprice * 18) / 100) + eval(state?.offerprice) )
  console.log(state)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: window.localStorage.getItem("email") },
    resolver: yupResolver(validationBookingConfirmation),
  });
  const loadScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      document.body.appendChild(script);
      script.onload = () => {
        resolve(true);
      };
      script.onerrora = () => {
        resolve(false);
      };
    });
  };
  const displayRazorpay = async (data) => {
    const res = await loadScript();
    if (!res) {
      toast.error("Razorpay failed to load.");
      return;
    }
    

    await axios
      .post("http://localhost:8080/api/payment/razorpay/create", {
        amount: Number(
          (eval(state?.offerprice) + eval(state?.offerprice * 18) / 100) * 100
        ),
      })
      .then((res) => {
        const options = {
          key: "rzp_test_Zlul8XlM4RPLdP",
          amount: Number(
            (eval(state?.offerprice) + eval(state?.offerprice * 18) / 100) * 100
          ).toFixed(2),
          currency: "INR",
          name: "Stop-n-Rest",
          description:
            "Please complete the payment to finish booking your room.",
          order_id: res.data.id,
          handler: async (response) => {
            if (response.razorpay_payment_id) {
              await axios.post("http://localhost:8080/api/payment/create", {
                orderCreationId: res.data.id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
                amount: Number(
                  state?.offerprice + (state?.offerprice * 18) / 100
                ).toFixed(2),
                name: data.name,
                email: data.email,
                contact: data.phoneNumber,
                paymentStatus: "success",
              });
              const booking = await axios.post(
                "http://localhost:8080/api/booking/createBooking",
                {
                  ...data,
                  guestName: data?.name,
                  paymentStatus: "success",
                  hotelName: state?.name,
                  hotelId: state?._id,
                  totalAmountPaid: Number(
                    eval(state?.offerprice) + eval(state?.offerprice * 18) / 100
                  ).toFixed(2),
                }
              );
              if (booking.status === 200) {
                navigate("/bookingconfirmation", {
                  state: {
                    ...state,
                    ...data,
                    hotelName: state?.name,
                    totalAmountPaid: Number(
                      eval(state?.offerprice) + eval(state?.offerprice * 18) / 100
                    ).toFixed(2),
                  },
                });
              }
            }
          },
          prefill: {
            name: data.name,
            email: data.email,
            contact: data.phoneNumber,
          },
          theme: {
            color: "#61dafb",
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong. Please try again.");
      });
  };
  return (
    <MainWrapperWithoutSearch>
      <form className="bcf-main" onSubmit={handleSubmit(displayRazorpay)}>
        {/* left */}
        <div className="bcf-left">
          <div className="hdMain resp">
            <div className="hdd">
              <span className="hddName">{state?.name}</span>
              <span className="hddAdd">{state?.address}</span>
            </div>
            <img src={state?.images?.[0]?.image} alt="" className="hdImg" />
          </div>
          <p
            style={{
              marginBottom: "30px",
              color: "#4EACFD",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            Please provide all the details to continue with your booking.
          </p>
          {/* Booking details */}
          <div className="bcf">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                {...register("name")}
              />
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
                disabled={window.localStorage.getItem("email")}
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
                placeholder="Mobile Number"
                {...register("phoneNumber")}
              />
              {errors.phoneNumber && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {errors?.phoneNumber?.message}
                </span>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Total Guests"
                {...register("totalGuest")}
              />
              {errors.totalGuest && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {errors?.totalGuest?.message}
                </span>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Number of Adults"
                {...register("totalAdults")}
              />
              {errors.totalAdults && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {errors?.totalAdults?.message}
                </span>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Number of Children"
                {...register("totalChildren")}
              />
              {errors.totalChildren && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {errors?.totalChildren?.message}
                </span>
              )}
            </div>
          </div>
          <p
            style={{
              marginBottom: "20px",
              marginTop: "30px",
              color: "#4EACFD",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            Please confirm your Check In and Check Out dates
          </p>
          <div className="bcf">
            <div>
              <input
                type="date"
                placeholder="Check In"
                {...register("checkIn")}
              />
              {errors.checkIn && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {errors?.checkIn?.message}
                </span>
              )}
            </div>
            <div>
              <input
                type="date"
                placeholder="Check Out"
                {...register("checkOut")}
              />
              {errors.checkOut && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {errors?.checkOut?.message}
                </span>
              )}
            </div>
          </div>
        </div>
        {/* right */}
        <div className="bcf-right">
          {/* Hotel Details */}
          <div className="hd">
            <div className="hdMain resp2">
              <div className="hdd">
                <span className="hddName">{state?.name}</span>
                <span className="hddAdd">{state?.address}</span>
              </div>
              {/* <img src={state.images[0].image} alt="" className="hdImg" /> */}
            </div>
            {/* Price */}
            <div className="hdPrice">
              <p>PRICE BREAK-UP</p>
              <div className="hdPriceRow">
                <span>Your Price</span>{" "}
                <span>₹{Number(state?.offerprice).toFixed(2)}</span>
              </div>
              <div className="hdPriceRow">
                <span>
                  Taxes <span style={{ fontSize: "10px" }}> (18% GST)</span>
                </span>{" "}
                <span>
                  ₹ {Number((state?.offerprice * 18) / 100).toFixed(2)}
                </span>
              </div>
              <div className="hdPriceRow">
                <span style={{ fontWeight: "bold" }}>Payable Amount</span>{" "}
                <span style={{ color: "#4EACFD", fontWeight: "bold" }}>
                  ₹
                  {Number(
                    
                    eval(state?.offerprice) + eval(state?.offerprice * 18) / 100

                  ).toFixed(2)}
                </span>
              </div>
            </div>
            <p className="hdText">
              By proceeding, I agree to Stop-n-Rest’s{" "}
              <span>User Agreement, Terms of Service</span> and{" "}
              <span>Cancellation & Property Booking Policies.</span>
            </p>
            <button type="submit" disabled={submitted}>
              <span>
                <PaymentIcon />
                PAY NOW
              </span>
            </button>
          </div>
        </div>
      </form>
    </MainWrapperWithoutSearch>
  );
}
export default BookingConfirmationForm;

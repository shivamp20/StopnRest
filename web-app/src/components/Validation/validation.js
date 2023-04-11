import * as yup from "yup";

export const validationRegistration = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be minimum 8 characters")
    .max(32)
    .matches(
      "^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
      "Password must contain at least 8 characters, 1 number and 1 special character"
    )
    .required("Password is required"),
});

export const validationBookingConfirmation = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .typeError("Email is required")
    .required("Email is required"),
  name: yup.string().max(100, "Name is too long").required("Name is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
  totalGuest: yup
    .number()
    .typeError("Must be a number (eg: 1,2,3)")
    .min(1, "Cannot be less than 1")
    .max(30, "Max value 30."),
  totalAdults: yup
    .number()
    .typeError("Must be a number (eg: 1,2,3)")
    .min(1, "Cannot be less than 1")
    .max(30, "Max value 30."),
  totalChildren: yup
    .number()
    .typeError("Must be a number (eg: 1,2,3)")
    .min(0, "Cannot be less than 0")
    .max(30, "Max value 30."),
  checkIn: yup
    .date()
    .typeError("Check In date is required")
    .min(new Date(Date.now()), "Please enter a valid start date")
    .required("Check In date is required"),
  checkOut: yup
    .date()
    .typeError("Check Out date is required")
    .min(yup.ref("checkIn"), "Check Out date cannot be before Check In Date")
    .required("Check out date is required"),
});

export const validationUserProfile = yup.object().shape({
  name: yup
    .string()
    .typeError("Enter valid name")
    .min(1, "Name is too short")
    .max(50, "Name is too large")
    .required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .typeError("Enter valid email")
    .required("Email is required"),
  number: yup
    .string()
    .matches(/^\d+$/, "Enter valid number")
    .typeError("Enter valid number")
    .required("number is required"),
  location: yup
    .string()
    .min(1, "Location is too short")
    .max(50, "Location is too large")
    .typeError("Enter valid location")
    .required("Location is required"),
});

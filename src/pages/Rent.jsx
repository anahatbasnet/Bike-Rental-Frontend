import React from "react";
import { useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Calendarcomp from "../components/Calendarcomp";

export default function Rent() {
  const location = useLocation();
  const { bikeDetails } = location.state;

  return (
    <div>
      <h1 className="flex font-mono text-3xl justify-center items-center py-5">
        Rent Page
      </h1>
      {bikeDetails && (
        <div className="card grid grid-cols-3 px-10 justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-20 py-[3rem] space-x-5">
          <div className="flex flex-col">
            <div>
              <img
                src={bikeDetails.imageUrl}
                alt="Bike"
                className="h-[16rem] w-[35rem]"
              />
            </div>
            <div className="flex-col">
              <strong>{bikeDetails.bikeName}</strong>
              <p>Description: {bikeDetails.bikeDetails}</p>
              <p>Price per Hour: NPR.{bikeDetails.pricePerHour}</p>
            </div>
          </div>
          <div className="flex ">
            <div className="flex flex-col  pl-6 gap-1 w-[22rem]">
              <strong>Enter your Details</strong>
              <Formik
                initialValues={{
                  fullName: "",
                  email: "",
                  phoneNumber: "",
                  age: "",
                  address: "",
                  country: "",
                }}
                validationSchema={Yup.object().shape({
                  fullName: Yup.string().required("This field is required"),
                  email: Yup.string()
                    .email("Please enter a valid email")
                    .required("This field is required"),
                  phoneNumber: Yup.string()
                    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
                    .required("This field is required"),

                  age: Yup.string()
                    .matches(
                      /^[0-9]{2}$/,
                      "Age must be atleast 2 digits if age is one digit then place 0 infront"
                    )
                    .required("This Field is required"),
                  address: Yup.string().required("This Field is required"),
                  country: Yup.string().required("This Field is required"),
                })}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                <Form className="space-y-3">
                  <label
                    htmlFor="fullName"
                    className="text-gray-600 flex flex-col"
                  >
                    Full Name
                  </label>
                  <Field
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter full name"
                    className="border border-gray-300 rounded-md py-2 px-3 md:w-[20rem] focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />

                  <label
                    htmlFor="email"
                    className="text-gray-600 flex flex-col"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    className="border border-gray-300 rounded-md py-2 px-3 md:w-[20rem] focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />

                  <label
                    htmlFor="phoneNumber"
                    className="text-gray-600 flex flex-col"
                  >
                    Phone Number
                  </label>
                  <Field
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter phone number"
                    className="border border-gray-300 rounded-md py-2 px-3 md:w-[20rem] focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />

                  <label htmlFor="age" className="text-gray-600 flex flex-col">
                    Age
                  </label>
                  <Field
                    type="text"
                    id="age"
                    name="age"
                    placeholder="Enter age"
                    className="border border-gray-300 rounded-md py-2 px-3 md:w-[20rem] focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="age"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />

                  <label
                    htmlFor="address"
                    className="text-gray-600 flex flex-col"
                  >
                    Address
                  </label>
                  <Field
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Enter address"
                    className="border border-gray-300 rounded-md py-2 px-3 md:w-[20rem] focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />

                  <label
                    htmlFor="country"
                    className="text-gray-600 flex flex-col"
                  >
                    Country
                  </label>
                  <Field
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Enter country"
                    className="border border-gray-300 rounded-md py-2 px-3 md:w-[20rem] focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                  <Calendarcomp className=" md:w-[20rem]" />

                  <button
                    type="submit"
                    className=" flex flex-col bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
          <div className="px-5 text-xs gap-3">
            <p>
              <strong>Booking Procedure:</strong>
              <br />
              We have a simple form and terms and conditions, which you need to
              fill up before hiring the bikes. Here are some required documents
              which you need to submit before renting a motorbike at Bike
              Rental.
              <br />
              <br />
              <strong>Required Documents:</strong>
              <br />
              You need to provide the following documents before hiring the
              bike.
              <div>
                <ul className="list-disc pl-5">
                  <li>
                    Original Passport with Nepalese visa or refundable cash
                    deposit.
                  </li>
                  <li>ID card or Citizenship card original.</li>
                  <li>
                    Valid driving license from your country or International
                    Driving license for hire.
                  </li>
                  <li>
                    Or Someone from Nepal who can stay as a Guarantor for the
                    security along with his/her citizenship, Address, Contact
                    details or requesting for the bike hire with their
                    letterhead where you are working or travel agents.
                  </li>
                </ul>
              </div>
              We have bike expertise who don’t compromise on mechanism and we
              don’t compromise on the service. We assure you that we provide all
              conditioned and maintained bikes.
              <br />
              <br />
              If you have any questions, please write us at
              bikerental.com@gmail.com.
              <br />
              <br />
              Thank you.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

import React from "react";
import { useLocation } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const { userDetails, bikeDetails, startDate, endDate } = location.state;

  // Calculate rental duration
  const start = new Date(startDate);
  const end = new Date(endDate);
  const rentalDuration = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

  // Calculate final price
  const finalPrice = rentalDuration * bikeDetails.pricePerHour;

  return (
    <>
      <div className="max-w-5xl mx-auto border p-6 rounded-lg shadow-md mt-8 bg-gray-100 w-full">
        <h1 className="text-3xl font-bold mb-4 text-center text-green-800">
          Payment Details
        </h1>
        <div className=" justify-center ">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-2">
            <h2 className="text-lg font-semibold my-2 text-blue-700">
              Bike Details
            </h2>
            <img
              src={bikeDetails.imageUrl}
              alt="Bike"
              className="w-full h-48 object-cover my-2"
            />
            <p>
              <strong>Bike Name:</strong> {bikeDetails.bikeName}
            </p>
            <p>
              <strong>Description:</strong> {bikeDetails.bikeDetails}
            </p>
            <p>
              <strong>Price Per Day:</strong> NPR.
              {bikeDetails.pricePerHour}
            </p>
          </div>
          <div className="w-full md:w-1/2 ">
            <h2 className="text-lg font-semibold my-2 text-blue-700">
              User Details
            </h2>
            <p>
              <strong>Full Name:</strong> {userDetails.fullName}
            </p>
            <p>
              <strong>Email:</strong> {userDetails.email}
            </p>
            <p>
              <strong>Phone Number:</strong> {userDetails.phoneNo}
            </p>
            <p>
              <strong>Age:</strong> {userDetails.age}
            </p>
            <p>
              <strong>Address:</strong> {userDetails.address}
            </p>
            <p>
              <strong>Country:</strong> {userDetails.country}
            </p>
          </div>
          <div className="w-full">
            <h2 className="text-lg font-semibold my-2 text-blue-700">
              Rental Duration
            </h2>
            <p>
              <strong>Start Date:</strong> {startDate.toDateString()}
            </p>
            <p>
              <strong>End Date:</strong> {endDate.toDateString()}
            </p>
            <p>
              <strong>Rental Duration:</strong> {rentalDuration} days
            </p>
          </div>
          <div className="w-full">
            <h2 className="text-lg font-semibold my-2 text-blue-700">
              Payment
            </h2>
            <p>
              <strong>Final Price:</strong> NPR.
              {finalPrice}
            </p>
            {/* Add payment options/form here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;

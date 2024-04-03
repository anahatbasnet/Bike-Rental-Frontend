import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Rent() {
    const location = useLocation();
    const { bikeDetails } = location.state;

    return (
        <div>
            <h1 className='flex font-mono text-3xl justify-center items-center py-5'>Rent Page</h1>
            {bikeDetails && (
                <div className='card grid grid-cols-3 px-10 justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-20 py-[3rem] space-x-5'>
                   <div className='flex flex-col'>

                   <div>
                        <img src={bikeDetails.imageUrl} alt="Bike" className="h-[25rem] w-[30rem]" />
                    </div>
                    <div className="flex-col">
                        <strong>{bikeDetails.bikeName}</strong>
                        <p>Description: {bikeDetails.bikeDetails}</p>
                        <p>Price per Hour: NPR.{bikeDetails.pricePerHour}</p>
                    </div>
                   </div>
                    <div className='flex '>
                        <div className="flex flex-col  pl-6 gap-4 w-[22rem]">
                            <strong>Enter your Details</strong>
                            <label htmlFor="fullName" className="text-gray-600">Full Name</label>
                            <input type="text" id="fullName" placeholder="Enter full name" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />

                            <label htmlFor="email" className="text-gray-600">Email</label>
                            <input type="email" id="email" placeholder="Enter email" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />

                            <label htmlFor="phoneNumber" className="text-gray-600">Phone Number</label>
                            <input type="text" id="phoneNumber" placeholder="Enter phone number" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />

                            <label htmlFor="age" className="text-gray-600">Age</label>
                            <input type="text" id="age" placeholder="Enter age" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />

                            <label htmlFor="address" className="text-gray-600">Address</label>
                            <input type="text" id="address" placeholder="Enter address" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />

                            <label htmlFor="country" className="text-gray-600">Country</label>
                            <input type="text" id="country" placeholder="Enter country" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />

                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Submit
                            </button>
                            </div>
                        </div>
                        <div className='px-5'>
                            <p >
                                <strong>

                                Booking Procedure: 
                                </strong>
                                <br />
                                We have a simple form and terms and conditions, which you need to fill up before hiring the bikes. Here are some required documents which you need to submit before renting a motorbike at Bike Rental.
                                <br /><br />
                                <strong>Required Documents:</strong>
                                <br />
                                You need to provide the following documents before hiring the bike.
                                <div>
    <ul className='list-disc pl-5'>
        <li>Original Passport with Nepalese visa or refundable cash deposit.</li>
        <li>ID card or Citizenship card original.</li>
        <li>Valid driving license from your country or International Driving license for hire.</li>
        <li>Or Someone from Nepal who can stay as a Guarantor for the security along with his/her citizenship, Address, Contact details or requesting for the bike hire with their letterhead where you are working or travel agents.</li>
    </ul>
</div>

                                We have bike expertise who don’t compromise on mechanism and we don’t compromise on the service. We assure you that we provide all conditioned and maintained bikes.
                                <br /><br />
                                If you have any questions, please write us at bikerental.com@gmail.com.
                                <br /><br />
                                Thank you.
                            </p>
                        </div>
                    
                </div>
            )}
        </div>
    );
}

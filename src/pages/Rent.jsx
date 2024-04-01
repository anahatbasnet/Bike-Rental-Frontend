import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Rent() {
    
    const location = useLocation();
    const { bikeDetails } = location.state;

    return (
        <div>
            < h1 className='flex font-mono text-3xl justify-center items-center py-5'>Rent Page</h1>
            {bikeDetails && (
                <div>
                    <div className='card  flex flex-1 justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-44 py-[3rem] space-x-8'>
                    <div>
                    </div>
                    <div className="flex-col">
                    <img src={bikeDetails.imageUrl} alt="Bike" className=" h-[10rem] w-[12rem]" />


                    <h2>{bikeDetails.bikeName}</h2>
                    <p>Description: {bikeDetails.bikeDetails}</p>
                    <p>Price per Hour: NPR.{bikeDetails.pricePerHour}</p>
                    </div>
                    <div className='flex '>
                    <div className="flex flex-col gap-4">
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
                    </div>
                    
                </div>
            )}
        </div>
    );
}

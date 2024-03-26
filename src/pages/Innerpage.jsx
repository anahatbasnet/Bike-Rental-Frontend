import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../services/instance';
import Button from '../components/Buttons';

export default function Innerpage() {
    const { bikeId } = useParams();
    const [bikeDetails, setBikeDetails] = useState(null);

    useEffect(() => {
        axiosInstance.get(`/${bikeId}`) 
            .then(response => {
                setBikeDetails(response.data); 
            })
            .catch(error => {
                console.error("Data Fetching Error", error);
            });
    }, [bikeId]); 

    return (
        <div>
             <div className='flex justify-center items-center text-3xl my-5 font-thin'>

              <h1>Bike Details</h1>
              </div>
            {bikeDetails ? (

                <div className='card flex justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-44 py-[3rem] space-x-8'>
                   
                    <div className="picture">
                            <img src={bikeDetails.imageUrl} alt="Bike" className=" h-[16rem] w-[20rem]" />
                        </div>
                        <div className='space-y-4'>

                    <p className='font-semibold'>{bikeDetails.bikeName}</p>
                    <p>Description: {bikeDetails.bikeDetails}</p>
                    <p>Price per Hour: NPR.{bikeDetails.pricePerHour}</p>
                        <div className="button-group flex justify-start py-3 space-x-3">
                            <Button className=" bg-green-700 hover:bg-green-600 ">Rent</Button>
                            <Button className=" bg-orange-600 hover:bg-orange-500">Book</Button>
                        </div>
                        </div>
                        
                        
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

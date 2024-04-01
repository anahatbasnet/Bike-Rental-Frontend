import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../services/instance';
import Button from './Buttons';

export default function Cards() {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        axiosInstance.get('allBikes')
            .then(response => {
                setBikes(response.data.data); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="cards-container grid grid-cols-3 gap-12 cursor-pointer">
            {bikes.map(bike => (
                <div className="card bg-white rounded-lg shadow-md" key={bike.id}>
                    <Link to={`/productDetail/${bike.id}`}>
                        <div className="picture">
                            <img src={bike.imageUrl} alt="Bike" className="w-full h-[15rem] object-cover rounded-t-lg" />
                        </div>
                        <div className="details-and-prices p-4">
                            <h3 className="text-lg font-semibold mb-2">{bike.bikeName}</h3>
                            <p className="text-gray-600 mb-2">Description: {bike.bikeDetails}</p>
                            <p className="text-gray-600">Price per Hour: NPR.{bike.pricePerHour}</p>
                        </div>
                        <div className="button-group flex justify-start py-3">
                            <Button className="mx-2 bg-green-700 hover:bg-green-600">Rent</Button>
                            <Button className="mx-2 bg-orange-600 hover:bg-orange-500">Book</Button>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

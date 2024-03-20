import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from "./Buttons";

export default function Cards() {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/bikes/allBikes')
            .then(response => {
                setBikes(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="cards-container grid grid-cols-3 gap-6 max-w-7xl mx-28 px-4">
            {bikes.map((bike, index) => (
                <div className="card bg-white rounded-lg shadow-md" key={index}>
                    <div className="picture">
                        <img src={bike.imageUrl} alt="Bike" className="w-full h-56 object-cover rounded-t-lg" />
                    </div>
                    <div className="details-and-prices p-4">
                        <h3 className="text-lg font-semibold mb-2">{bike.bikeName}</h3>
                        <p className="text-gray-600 mb-2">Description: {bike.bikeDetails}</p>
                        <p className="text-gray-600">Price per Hour: ${bike.pricePerHour}</p>
                    </div>
                    <div className="button-group flex justify-start p-4">
                        <Button className="mx-2 bg-green-700 hover:bg-green-600">Rent</Button>
                        <Button className="mx-2 bg-orange-600 hover:bg-orange-500">Book</Button>
                    </div>
                </div>
            ))}
        </div>
    );
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Modal = ({ match }) => {
  const [bike, setBike] = useState(null);

  useEffect(() => {
    const bikeId = match.params.id;
    axios.get(`http://localhost:8080/bikes/${bikeId}`)
      .then(response => {
        setBike(response.data);
      })
      .catch(error => {
        console.error('Error fetching bike details:', error);
      });
  }, [match.params.id]);

  if (!bike) {
    return <div>Loading...</div>;
  }

  return (
    <div className="modal-container">
      <h2>{bike.bikeName}</h2>
      <p>Description: {bike.bikeDetails}</p>
      <p>Price per Hour: Rs.{bike.pricePerHour}</p>
    </div>
  );
}

export default Modal;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/Carousel.css';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";


export default function Carousel() {
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

    // Go to the previous slide
    const previousSlide = () => {
        sliderRef.slickPrev();
    };

    // Go to the next slide
    const nextSlide = () => {
        sliderRef.slickNext();
    };

    // Reference to the Slider component
    let sliderRef;

    // Configure settings for the carousel
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Show only one image at a time
        slidesToScroll: 1,
        autoplay: true, // Enable automatic sliding
        autoplaySpeed: 3000, // Set autoplay speed to 3 seconds
        prevArrow: <button className="slick-prev"><HiOutlineChevronLeft /></button>,
        nextArrow: <button className="slick-next"><HiOutlineChevronRight /></button>
    };

    return (
        <div className="carousel-container">
            <Slider {...settings} ref={slider => (sliderRef = slider)}>
                {bikes.map((bike, index) => (
                    <div className="card bg-gray rounded shadow-md h-[30rem] py-16 space-y-8" key={index}>
                        <div className="picture">
                            <img src={bike.imageUrl} alt="Bike" className="w-full  object-contain " style={{ objectFit: 'contain' }} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

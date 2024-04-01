import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import cycleImage1 from '../assets/Pictures/cycle1.jpg'; 
import cycleImage2 from '../assets/Pictures/cycle2.jpg'; 
import cycleImage3 from '../assets/Pictures/cycle3.jpg'; 
import cycleImage4 from '../assets/Pictures/cycle4.jpg'; 
import cycleImage5 from '../assets/Pictures/cycle5.jpg'; 


export default function Carousel() {
    
    const staticImageData = [
        { id: 'cycle1', imageUrl: cycleImage1 },
        { id: 'cycle2', imageUrl: cycleImage2 },
        { id: 'cycle3', imageUrl: cycleImage3 },
        { id: 'cycle4', imageUrl: cycleImage4 },
        { id: 'cycle5', imageUrl: cycleImage5 }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className={className}  style={{ ...style, zIndex: 9999 }}>
                <HiOutlineChevronLeft onClick={onClick} className="text-black text-3xl " />
            </div>
        );
    }

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className={className} style={{ ...style, zIndex: 9999 }}>
                <HiOutlineChevronRight onClick={onClick} className="text-black text-3xl" />
            </div>
        );
    }

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {staticImageData.map((bike, index) => (
                    <div className="card bg-gray rounded shadow-md h-[25rem] relative bottom-44 pb-32 space-y-8 flex justify-center mt-0 items-center" key={index}>
                        <div className="picture">
                            <img src={bike.imageUrl} alt="Bike" className="w-full h-full object-contain" style={{ objectFit: 'contain' }} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Navbar() {
    return (
        <div className="flex justify-between items-center border-2  bg-white text-black py-5 px-5 ">
            <div className='font-bold text-2xl'>
                <Link to='/'>
                    Bike Rental
                </Link>
            </div>
            <ul className="flex list-none justify-evenly items-center space-x-6 font-thin text-lg">
                <Link to='/'>
                <li>Home</li>
                </Link>
                <li>About</li>
                <Link to ='/login'>
                <li>Login</li>
                </Link>
                <Link to='/register'>
                <li>Register</li>
                </Link>
            </ul>
        </div>

    );
}

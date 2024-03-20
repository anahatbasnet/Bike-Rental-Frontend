import React from 'react';

export default function Navbar() {
    return (
        <div className="flex justify-between items-center border-2 bg-black text-white py-5 px-5">
            <div>
                Bike Rental
            </div>
            <ul className="flex list-none justify-evenly items-center space-x-6">
                <li>Home</li>
                <li>About</li>
                <li>Sign Up</li>
                <li>Sign In</li>
            </ul>
        </div>
    );
}

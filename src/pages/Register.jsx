import React, { useState } from 'react';
import Button from "../components/Buttons";
import { Link } from 'react-router-dom';

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        fullName: '',
        password: '',
        role: 'USER'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:8080/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (response.status === 200) {
                console.log(response)
                alert("User registered successfully");
                

            } else {
                if (response.status === 400) {
                    const responseData = await response.json();
                    alert(responseData.message); 
                } else {
                    alert("Registration failed. Please try again.");
                }
            }
        } catch (error) {
            console.error('Error registering user:', error);
            alert("Registration failed. Please try again.");
        }
    };
    

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mt-[-2rem]">
                <h2 className="text-3xl font-semibold mb-4 text-center">Register</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm rounded-md py-2 border border-gray-500 px-2"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm rounded-md py-2 border border-gray-500 px-2"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm rounded-md py-2 border border-gray-500 px-2"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm rounded-md py-2 border border-gray-500 px-2"
                            placeholder="Enter your password"
                        />
                    </div>
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Register
                    </Button>
                    <p>Have an account <Link to='/login'>Login</Link> </p>
                </form>
            </div>
        </div>
    );
}

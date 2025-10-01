"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useDonation } from "../context/DonationContext";
import { Menu, X } from "lucide-react";
const page = () => {
    const { increment } = useDonation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [result, setResult] =useState("");
    const handleSubmit = async(e) => {
    e.preventDefault();
    increment();
    alert("Form submitted successfully!");
    setResult("Sending....");
        const formData = new FormData(e.target);

        formData.append("access_key", "e9277256-d970-4b0d-84f9-b45a6e7d7d60");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult(" Donor Form Submitted Successfully");
            e.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
  };
    return (
        <div>
            <div className='Navbar'>

            </div>
            <div className="donoor">
                <div className="donorcontains font-title bg-cover bg-center" style={{ backgroundImage: "url('/istockphoto-1414885184-612x612.jpg')" }}>
                    <div className="Navbar">

                        <div className="navbar flex justify-between items-center px-5 py-3 bg-white fixed top-0 w-full shadow-md z-50">

                            <Link href="/">
                                <div className="bloodorg text-2xl text-red-600 font-semibold cursor-pointer">
                                    BloodOrg
                                </div>
                            </Link>
                            <ul className="hidden md:flex gap-4">
                                <Link href="/">
                                    <li className="text-red-600 bg-white rounded-full p-2 hover:text-white hover:bg-red-600 cursor-pointer">
                                        Home
                                    </li>
                                </Link>
                                <Link href="/user/donor">
                                    <li className="text-red-600 bg-white rounded-full p-2 hover:text-white hover:bg-red-600 cursor-pointer">
                                        Donor
                                    </li>
                                </Link>
                                <Link href="/user/requestor">
                                    <li className="text-red-600 bg-white rounded-full p-2 hover:text-white hover:bg-red-600 cursor-pointer">
                                        Requestor
                                    </li>
                                </Link>
                            </ul>
                            <button
                                className="md:hidden text-red-600"
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                {menuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                        {menuOpen && (
                            <div className="md:hidden absolute top-[64px] left-0 w-full bg-white shadow-lg z-40">
                                <ul className="flex flex-col items-center gap-4 py-4">
                                    <Link href="/" onClick={() => setMenuOpen(false)}>
                                        <li className="text-red-600 hover:text-white hover:bg-red-600 px-4 py-2 rounded-full">
                                            Home
                                        </li>
                                    </Link>
                                    <Link href="/user/donor" onClick={() => setMenuOpen(false)}>
                                        <li className="text-red-600 hover:text-white hover:bg-red-600 px-4 py-2 rounded-full">
                                            Donor
                                        </li>
                                    </Link>
                                    <Link href="/user/requestor" onClick={() => setMenuOpen(false)}>
                                        <li className="text-red-600 hover:text-white hover:bg-red-600 px-4 py-2 rounded-full">
                                            Requestor
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="donorflex flex flex-row-reverse justify-around items-center h-[120vh] mt-14 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center">
                        <div className="flexcol flex flex-col justify-center items-center gap-4">
                            <div className="donorphtots">
                                <img src="/images.jpeg" alt="" className='w-[300px]' />
                            </div>
                            <div className="photodetails w-[600px] text-lg font-md max-md:w-[300px]">
                                "A single blood donation can give someone a lifetime," "Donate blood and save lives," and "The blood donation is the most precious gift you can give"
                            </div>
                        </div>
                        <div className="donordetails">
                            <form className="space-y-5 border border-white p-3 max-lg:mt-10" onSubmit={handleSubmit}>
                                <div className='flex flex-col justify-center items-center'>
                                    <div className="donardetailss text-2xl text-red-600">
                                        Donor Details
                                    </div>
                                    <div className="line h-[2px] bg-black w-[140px]">

                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <label className="w-40 font-medium">First Name:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your First Name"
                                        className="p-2 border border-gray-400 rounded w-3/4 focus:outline-none focus:ring-2 focus:ring-red-500"
                                        required
                                        name='First Name'
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <label className="w-40 font-medium">Last Name:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Last Name"
                                        className="p-2 border border-gray-400 rounded w-3/4 focus:outline-none focus:ring-2 focus:ring-red-500"
                                        required
                                        name='Last Name'
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <label className="w-40 font-medium">Age:</label>
                                    <input
                                        type="number"
                                        min="8"
                                        max="100"
                                        placeholder="Enter Your Age"
                                        className="p-2 border border-gray-400 rounded w-3/4 focus:outline-none focus:ring-2 focus:ring-red-500"
                                        required
                                        name='Age'
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <label className="w-40 font-medium">Gender:</label>
                                    <select
                                        className="p-2 border border-gray-400 rounded w-3/4 focus:outline-none focus:ring-2 focus:ring-red-500"
                                        required name='Gender'
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <div className="flex justify-between items-center">
                                    <label className="w-40 font-medium">Blood Group:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Blood Group"
                                        className="p-2 border border-gray-400 rounded w-3/4 focus:outline-none focus:ring-2 focus:ring-red-500"
                                        required
                                        name='Blood Group'
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <label className="w-40 font-medium">Phone Number:</label>
                                    <input
                                        type="tel"
                                        placeholder="Enter Your Phone Number"
                                        pattern="[0-9]{10}"
                                        className="p-2 border border-gray-400 rounded w-3/4 focus:outline-none focus:ring-2 focus:ring-red-500"
                                        required
                                        name='Phone Number'
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <label className="w-40 font-medium">Email:</label>
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email ID"
                                        className="p-2 border border-gray-400 rounded w-3/4 focus:outline-none focus:ring-2 focus:ring-red-500"
                                        required
                                        name='Email Id'
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <label className="w-40 font-medium">City:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your City"
                                        className="p-2 border border-gray-400 rounded w-3/4 focus:outline-none focus:ring-2 focus:ring-red-500"
                                        required
                                        name='City'
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <label className="w-40 font-medium">Last Donation:</label>
                                    <input
                                        type="date"
                                        className="p-2 border border-gray-400 rounded w-3/4 focus:outline-none focus:ring-2 focus:ring-red-500"
                                        required
                                        name='Last Donation'
                                    />
                                </div>
                                <div className="flex justify-center mt-6">
                                    <button
                                        type="submit"
                                        className="bg-red-600 hover:bg-red-700 transition text-white rounded-full px-6 py-2 font-semibold"
                                    >
                                        Submit
                                    </button>
                                </div>
                                <div className='text-center mt-4'>{result}</div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
             <footer className=" text-center p-[10px] font-title text-red-600 font-semibold max-sm:mt-10">
                <p>&copy; 2025 BloodOrg. All rights reserved.</p>
                <p>
                    <a href="#">Privacy Policy</a> |
                    <a href="#">Terms of Service</a> |
                    <span>Contact Us:</span>
                    <a href="#">bloodorg75@outlook.com</a>
                </p>
            </footer>
        </div>

    )
}

export default page

"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from "lucide-react";
const page = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [result, setResult] = useState("");
    const [value, setValue] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
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
            {/* Navbar */}
            <div className="Navbar">
                <div className="navbar flex justify-between items-center px-5 py-3 bg-white fixed top-0 w-full shadow-md z-50 font-title">
                    <Link href="/">
                        <div className="bloodorg text-2xl text-red-600 font-semibold cursor-pointer">
                            BloodOrg
                        </div>
                    </Link>
                    <ul className="hidden md:flex gap-4 font-title">
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
                    <div className="md:hidden absolute top-[64px] left-0 w-full bg-white shadow-lg z-40 ">
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
            <div className="donoor">
                <div
                    className="donorcontains font-title bg-cover bg-center pt-20"style={{ backgroundImage: "url('/istockphoto-1414885184-612x612.jpg')" }}>
                    <div className="donorflex flex flex-row-reverse justify-around items-center min-h-screen mt-14 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center gap-8 px-4">
 
                        <div className="flexcol flex flex-col justify-center items-center gap-4 text-center">
                            <div className="donorphtots">
                                <img src="/images.jpeg" alt="" className="w-[300px] max-sm:w-[200px] rounded-lg shadow-md" />
                            </div>
                            <div className="photodetails w-[600px] max-md:w-[90%] text-lg max-sm:text-sm font-md leading-relaxed text-black">
                                {"A single blood donation can give someone a lifetime. Donate blood and save lives. The blood donation is the most precious gift you can give."}
                            </div>
                        </div>
                        <div className="donordetails w-full max-w-md  p-5 rounded-xl shadow-md">
                            <form
                                className="space-y-5" onSubmit={handleSubmit}
                            >
                                <div className="flex flex-col justify-center items-center">
                                    <div className="donardetailss text-2xl text-red-600 font-bold">
                                        Donor Details
                                    </div>
                                    <div className="line h-[2px] bg-red-600 w-[140px] mt-1"></div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col">
                                        <label className="font-medium text-sm mb-1">First Name</label>
                                        <input type="text" placeholder="Enter Your First Name" className="p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required name="First Name"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="font-medium text-sm mb-1">Last Name</label>
                                        <input type="text"placeholder="Enter Your Last Name" className="p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required name="Last Name"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="font-medium text-sm mb-1">Age</label>
                                        <input
                                            type="number"
                                            min="8"
                                            max="100"
                                            placeholder="Enter Your Age"
                                            className="p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                                            required
                                            name="Age"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="font-medium text-sm mb-1">Gender</label>
                                        <select
                                            className="p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                                            required
                                            name="Gender"
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="font-medium text-sm mb-1">Blood Group</label>
                                        <input
                                            type="text"
                                            placeholder="Enter Your Blood Group"
                                            className="p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                                            required
                                            name="Blood Group"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="font-medium text-sm mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="Enter Your Phone Number"
                                            pattern="[0-9]{10}"
                                            className="p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                                            required
                                            name="Phone Number"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="font-medium text-sm mb-1">Email</label>
                                        <input
                                            type="email"
                                            placeholder="Enter Your Email ID"
                                            className="p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                                            required
                                            name="Email Id"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="font-medium text-sm mb-1">City</label>
                                        <input
                                            type="text"
                                            placeholder="Enter Your City"
                                            className="p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                                            required
                                            name="City"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="font-medium text-sm mb-1">Last Donation</label>
                                        <div className="flex items-center gap-4">
                                             <input
                                            type="date"
                                            className="p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                                            required
                                            name="Last Donation"
                                            value={value !== "None" ? value : ""}
                                            onChange={(e) => setValue(e.target.value)}
                                        />
                                        <input type="radio" value="None" id="None" checked={value === "None"} onChange={() => setValue("None")}/>
                                        <label htmlFor="None">None</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-6">
                                    <button type="submit" className="bg-red-600 hover:bg-red-700 transition text-white rounded-full px-6 py-2 font-semibold w-full">
                                        Submit
                                    </button>
                                </div>
                                <div className="text-center mt-4 text-sm">{result}</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="text-center p-5 font-title text-red-600 font-semibold max-sm:text-sm bg-gray-100 mt-10">
                <p>&copy; 2025 BloodOrg. All rights reserved.</p>
                <p className="mt-2 space-x-2">
                    <a href="#" className="hover:underline">Privacy Policy</a> |
                    <a href="#" className="hover:underline">Terms of Service</a> |
                    <a href="mailto:bloodorg75@outlook.com" className="hover:underline">Contact Us</a>
                </p>
            </footer>
        </div>
    )
}

export default page

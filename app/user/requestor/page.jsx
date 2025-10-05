"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from "lucide-react";

const page = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [result, setResult] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
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
            setResult(" Your Request Form Submitted Successfully");
            e.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }

    return (
        <div>
            <div className='Navbar'></div>
            <div className="donoor">
                <div
                    className="donorcontains font-title bg-cover bg-center h-[120vh] max-sm:h-auto"
                    style={{ backgroundImage: "url('/istockphoto-1414885184-612x612.jpg')" }}
                >
                    <div className="Navbar">
                        <div className="navbar flex justify-between items-center px-5 py-3 bg-white fixed top-0 w-full shadow-md z-50">
                            <Link href="/">
                                <div className="bloodorg text-2xl text-red-600 font-semibold cursor-pointer">
                                    BloodOrg
                                </div>
                            </Link>
                            <ul className="hidden md:flex gap-4">
                                <Link href="/">
                                    <li className="text-red-600 bg-white rounded-full p-2 hover:text-white hover:bg-red-600 cursor-pointer">Home</li>
                                </Link>
                                <Link href="/user/donor">
                                    <li className="text-red-600 bg-white rounded-full p-2 hover:text-white hover:bg-red-600 cursor-pointer">Donor</li>
                                </Link>
                                <Link href="/user/requestor">
                                    <li className="text-red-600 bg-white rounded-full p-2 hover:text-white hover:bg-red-600 cursor-pointer">Requestor</li>
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
                                        <li className="text-red-600 hover:text-white hover:bg-red-600 px-4 py-2 rounded-full">Home</li>
                                    </Link>
                                    <Link href="/user/donor" onClick={() => setMenuOpen(false)}>
                                        <li className="text-red-600 hover:text-white hover:bg-red-600 px-4 py-2 rounded-full">Donor</li>
                                    </Link>
                                    <Link href="/user/requestor" onClick={() => setMenuOpen(false)}>
                                        <li className="text-red-600 hover:text-white hover:bg-red-600 px-4 py-2 rounded-full">Requestor</li>
                                    </Link>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="donorflex flex flex-row-reverse justify-around items-center h-auto mt-14 px-4 py-6 max-lg:flex-col max-lg:gap-8">
                        <div className="flexcol flex flex-col justify-center items-center gap-4 mt-10">
                            <div className="donorphtots">
                                <img
                                    src="/woman-drawing-blood-mans-arm-600nw-2494733193.webp"
                                    alt=""
                                    className="w-[250px] max-sm:w-[180px]"
                                />
                            </div>
                            <div className="photodetails w-[600px] text-lg font-md text-center text-black max-md:w-[90%] max-sm:text-sm">
                                "Hope flows through every drop. When you request blood, remember - a community stands beside you."
                            </div>
                        </div>
                        <div className="donordetails w-full max-w-md p-5 rounded-xl shadow-md bg-white/90 max-sm:bg-white max-sm:w-[95%]">
                            <form
                                className="space-y-5 border border-gray-300 rounded-lg p-4"
                                onSubmit={handleSubmit}
                            >
                                <div className="flex flex-col justify-center items-center">
                                    <div className="donardetailss text-2xl text-red-600">
                                        Requestor Details
                                    </div>
                                    <div className="line h-[2px] bg-black w-[140px]"></div>
                                </div>
                                <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start gap-2">
                                    <label className="w-40 font-medium max-sm:w-full">Patient Name:</label>
                                    <input type="text" placeholder="Enter Patient Name" className="p-2 border border-gray-400 rounded w-3/4 max-sm:w-full" required name="Patient Name" />
                                </div>
                                <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start gap-2">
                                    <label className="w-40 font-medium max-sm:w-full">Blood Type:</label>
                                    <input type="text" placeholder="Enter Your Blood Type" className="p-2 border border-gray-400 rounded w-3/4 max-sm:w-full" required name="Blood Type" />
                                </div>
                                <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start gap-2">
                                    <label className="w-40 font-medium max-sm:w-full">Units Needed:</label>
                                    <input type="text" placeholder="Enter Your Units" className="p-2 border border-gray-400 rounded w-3/4 max-sm:w-full" required name="Units Required" />
                                </div>
                                <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start gap-2">
                                    <label className="w-40 font-medium max-sm:w-full">Hospital Name:</label>
                                    <input type="text" placeholder="Enter Hospital Name" className="p-2 border border-gray-400 rounded w-3/4 max-sm:w-full" required name="Hospital Name" />
                                </div>
                                <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start gap-2">
                                    <label className="w-40 font-medium max-sm:w-full">City:</label>
                                    <input type="text" placeholder="Enter Your City" className="p-2 border border-gray-400 rounded w-3/4 max-sm:w-full" required name="City" />
                                </div>
                                <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start gap-2">
                                    <label className="w-40 font-medium max-sm:w-full">Contact Name:</label>
                                    <input type="text" placeholder="Enter Contact Name" className="p-2 border border-gray-400 rounded w-3/4 max-sm:w-full" required name="Contact Name" />
                                </div>
                                <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start gap-2">
                                    <label className="w-40 font-medium max-sm:w-full">Contact Number:</label>
                                    <input type="tel" placeholder="Enter Contact Number" pattern="[0-9]{10}" className="p-2 border border-gray-400 rounded w-3/4 max-sm:w-full" required name="Contact Number" />
                                </div>
                                <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start gap-2">
                                    <label className="w-40 font-medium max-sm:w-full">Request Date:</label>
                                    <input type="date" className="p-2 border border-gray-400 rounded w-3/4 max-sm:w-full" required name="Request Date" />
                                </div>
                                <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start gap-2">
                                    <label className="w-40 font-medium max-sm:w-full">Status:</label>
                                    <select className="p-2 border border-gray-400 rounded w-3/4 max-sm:w-full" required name="Status">
                                        <option value="Pending">Pending</option>
                                    </select>
                                </div>
                                <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start gap-2">
                                    <label className="w-40 font-medium max-sm:w-full">Note (in case of emergency):</label>
                                    <textarea placeholder="Enter your message here" className="p-2 border border-gray-400 rounded w-3/4 max-sm:w-full" name="Note"></textarea>
                                </div>

                                <div className="flex justify-center mt-6">
                                    <button type="submit" className="bg-red-600 hover:bg-red-700 transition text-white rounded-full px-6 py-2 font-semibold">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="text-center p-[10px] font-title text-red-600 font-semibold max-sm:mt-14 text-sm max-sm:text-xs">
                <p>&copy; 2025 BloodOrg. All rights reserved.</p>
                <p>
                    <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | <span>Contact Us:</span> <a href="#">bloodorg75@outlook.com</a>
                </p>
            </footer>
        </div>
    )
}

export default page

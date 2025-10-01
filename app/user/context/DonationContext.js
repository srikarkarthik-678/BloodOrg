"use client";
import { createContext, useContext, useState, useEffect } from "react";

const DonationContext = createContext();

export const DonationProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  // Load count from localStorage when app starts
  useEffect(() => {
    const storedCount = localStorage.getItem("donationCount");
    if (storedCount) {
      setCount(parseInt(storedCount, 10));
    }
  }, []);

  // Save count to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("donationCount", count);
  }, [count]);

  const increment = () => setCount((prev) => prev + 1);

  return (
    <DonationContext.Provider value={{ count, increment }}>
      {children}
    </DonationContext.Provider>
  );
};

export const useDonation = () => useContext(DonationContext);

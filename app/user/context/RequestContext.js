"use client";
import { createContext, useContext, useState, useEffect } from "react";

const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
  const [counts, setCounts] = useState(0);

  // Load counts from localStorage when app starts
  useEffect(() => {
    const storedCounts = localStorage.getItem("requestCounts");
    if (storedCounts) {
      setCounts(parseInt(storedCounts, 10));
    }
  }, []);

  // Save counts to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("requestCounts", counts);
  }, [counts]);

  const increments = () => setCounts((prev) => prev + 1);

  return (
    <RequestContext.Provider value={{ counts, increments }}>
      {children}
    </RequestContext.Provider>
  );
};

export const useRequest = () => useContext(RequestContext);

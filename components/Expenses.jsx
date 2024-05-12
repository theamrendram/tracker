"use client";
import React, { useEffect } from "react";
import { connectDB } from "@/helpers/db";
const Expenses = () => {
  connectDB();
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("/api/ConnectToMongoDB ");
  //     const data = await response.json();
  //     console.log(data.message); // Should print "Connected to database"
  //   }
  //   fetchData();
  // }, []);
  return (
    <div>
      <h1>Expenses</h1>
    </div>
  );
};

export default Expenses;

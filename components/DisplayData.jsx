'use client';
import React, { useContext,useEffect, useState } from "react";
import {ExpenseContext} from "./ExpenseContext";
import SingleData from "./SingleData";
const DisplayData = () => {
  const [data, setData] = useState([]);
    const { expenses } = useContext(ExpenseContext);

  useEffect(() => {
    setData(expenses);
  }, [expenses]);

  return (
    <div className="w-full h-full border">
      {" "}
      {data.length > 0 ? (
        <div className="flex flex-col rounded-lg">
          {data.map((item) => (
            <div key={item._id}>
             <SingleData {...item} />
            </div>
          ))}
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default DisplayData;

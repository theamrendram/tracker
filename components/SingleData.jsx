import React from "react";


function extractDate (d) {
    const [date, time] = d.split("T");
    let newDate = date.split("-").reverse().join("-");
    console.log("date", date, "time", time);
    return `${newDate}`;
}

const SingleData = ({ _id, expense, amount, date, category, type }) => {
  return (
    <div
      className={`flex py-1  px-2 md:px-10 text-black w-full ${
        type === "income"
          ? "text-green-500 bg-green-100"
          : type === "expense"
          ? "text-red-500 bg-red-100"
          : "text-black bg-white"
      }`}>
      <p className="w-full">{expense}</p>
      <p className="w-full">{amount}</p>
      <p className={`hidden md:block w-full`}>{extractDate(date)}</p>
      <p className="w-full">{category}</p>
      <p
        className={`hidden md:block ${
          type === "income"
            ? "text-green-500 bg-green-100"
            : type === "expense"
            ? "text-red-500 bg-red-100"
            : ""
        }`}>
        {type}
      </p>
    </div>
  );
};

export default SingleData;

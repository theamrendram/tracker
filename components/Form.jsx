"use client";
import React, { useState } from "react";

const Form = () => {
  const [expense, setExpense] = useState({
    expense: "",
    amount: "",
    date: "",
    category: "",
    type: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(expense);
    const response = fetch("/api/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expense),
    });
     if (response.ok) {
      // Form submission successful, redirect to the same page
      router.push(router.asPath);
    } else {
      // Handle error response
      console.error('Form submission failed:', response.status);
    }
  } 

  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          id="expense"
          name="expense"
          placeholder="Expense"
          className="py-2 px-10 bg-zinc-800 rounded-lg mb-4"
          onChange={handleChange}
        />
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="Amount"
          className="py-2 px-10 bg-zinc-800 rounded-lg mb-4"
          onChange={handleChange}
        />
        <input
          type="date"
          id="date"
          name="date"
          placeholder="Date"
          className="py-2 px-10 bg-zinc-800 rounded-lg mb-4"
          defaultValue={new Date().toISOString().split("T")[0]}
          onChange={handleChange}
        />
        <select
          className="py-2 px-10 bg-zinc-800 rounded-lg mb-4"
          name="category"
          onChange={handleChange}
          defaultValue={"food"}>
          <option value="food">Food</option>
          <option value="travel">Travel</option>
          <option value="entertainment">Entertainment</option>
          <option value="bills">Bills</option>
          <option value="health">Health</option>
          <option value="education">Education</option>
          <option value="investment">Investment</option>
          <option value="gift">Gift</option>
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="other">Other</option>
        </select>
        <select
          className="py-2 px-10 bg-zinc-800 rounded-lg mb-4"
          name="type"
          defaultValue={"income"}
          onChange={handleChange}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
          <option value="transfer">Transfer</option>
          <option value="other">Other</option>
        </select>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="4"
          placeholder="Message"
          className="py-2 px-10 bg-zinc-800 rounded-lg mb-4"
          onChange={handleChange}></textarea>
        <button
          type="submit"
          className="py-2 px-10 bg-pink-400 rounded-lg mb-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

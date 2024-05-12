import React, { useContext, useEffect, useState } from "react";
import { ExpenseContext } from "./ExpenseContext";
import Card from "./Card";
import { TbCoinRupeeFilled } from "react-icons/tb";

const RectangleCard = ({ title, balance, icon }) => {
  const { expenses } = useContext(ExpenseContext);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [avgExpense, setAvgExpense] = useState(0);
  let cash = 1100;

  useEffect(() => {
    const income = expenses
      .filter((item) => item.type === "income")
      .reduce((acc, item) => (acc += item.amount), 0);
    setTotalIncome(income);
    const expense = expenses
      .filter((item) => item.type === "expense")
      .reduce((acc, item) => (acc += item.amount), 0);
    setTotalExpense(expense);
    
    if (expenses.length > 0) {
      // days passed from start of the month
      const currentDate = new Date().getDate();
      const daysPassed = currentDate - 1;
      setAvgExpense((totalExpense / daysPassed).toFixed(2));
      console.log("avgExpense", avgExpense, daysPassed);
    }

  }, [expenses]);
  return (
    <div className="grid grid-flow-col">
    <Card title="Income" amount={totalIncome} icon={<TbCoinRupeeFilled />} />
    <Card title="Balance" amount={totalIncome - totalExpense} icon={<TbCoinRupeeFilled />} />
    <Card title="Expense" amount={totalExpense} icon={<TbCoinRupeeFilled />} />
    <Card title="Cash" amount={cash} icon={<TbCoinRupeeFilled />} />
    <Card title="Avg Expense" amount={avgExpense} icon={<TbCoinRupeeFilled />} />
    </div>
  );
};

export default RectangleCard;

import React, { useContext, useEffect, useState } from "react";
import { ExpenseContext } from "./ExpenseContext";
import Card from "./Card";
import { TbCoinRupeeFilled } from "react-icons/tb";

function extractDate(d) {
  const [date, time] = d.split("T");
  return date;
}

const RectangleCard = ({ title, balance, icon }) => {
  const { expenses } = useContext(ExpenseContext);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [avgExpense, setAvgExpense] = useState(0);
  const [todaysSpent, setTodaysSpent] = useState(0);
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

    // get todays expenses
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); 
    const day = String(today.getDate()).padStart(2, "0"); 
    const date = `${year}-${month}-${day}`;
    console.log("date", date);
    const todaysExpensesArray = expenses.filter((item) => {
      let total = 0
       if (extractDate(item.date) === date) {
        total += item.amount;
        return total;
      }
    });
    
    console.log("todaysExpenses", todaysExpensesArray.reduce((acc, item) => (acc += item.amount), 0));
    let todaysExpenses = todaysExpensesArray.reduce((acc, item) => (acc += item.amount), 0);
    setTodaysSpent(todaysExpenses);
  }, [expenses]);

  useEffect(() => {
    if (expenses.length > 0) {
      // days passed from start of the month
      const currentDate = new Date().getDate();
      const daysPassed = currentDate - 1;
      setAvgExpense((totalExpense / daysPassed).toFixed(2));
      console.log("avgExpense", avgExpense, daysPassed);
    }
  }, [expenses, totalExpense, avgExpense]);

  return (
    <div className="flex flex-wrap justify-between">
      <Card title="Income" amount={totalIncome} icon={<TbCoinRupeeFilled />} />
      <Card
        title="Today's Spend"
        amount={todaysSpent}
        icon={<TbCoinRupeeFilled />}
      />
      <Card
        title="Balance"
        amount={totalIncome - totalExpense}
        icon={<TbCoinRupeeFilled />}
      />
      <Card
        title="Expense"
        amount={totalExpense}
        icon={<TbCoinRupeeFilled />}
      />
      <Card title="Cash" amount={cash} icon={<TbCoinRupeeFilled />} />
      <Card
        title="Avg Expense"
        amount={avgExpense}
        icon={<TbCoinRupeeFilled />}
      />
    </div>
  );
};

export default RectangleCard;

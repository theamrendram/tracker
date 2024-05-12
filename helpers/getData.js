import { connectDB } from "./db";
import Expense from "@models/ExpenseModel";
const getData = async () => {
  connectDB();
  try {
    const response = await Expense.find();
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export default getData;
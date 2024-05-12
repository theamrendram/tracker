import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
  expense: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
});

const Expense =
  mongoose.models.expenses || mongoose.model("expenses", ExpenseSchema);
export default Expense;

import { connectDB } from "@/helpers/db";
import Expense from "@/models/ExpenseModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  try {
    const expenses = await Expense.find();
    return NextResponse.json(expenses);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}

export async function POST(request) {
  await connectDB();
  const body = await request.json();
  console.log(body);
  const expense = new Expense(body);
  await expense.save();
  return NextResponse.json({ name: "test" });
}
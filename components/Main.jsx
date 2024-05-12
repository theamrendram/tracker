'use client'
import React from 'react'

import DisplayData from './DisplayData';
import { ExpenseProvider } from './ExpenseContext';
import RectangleCard from './Header';
const Main = () => {
  return (
    <ExpenseProvider>
      <RectangleCard />
      <DisplayData />
    </ExpenseProvider>
  );
}

export default Main
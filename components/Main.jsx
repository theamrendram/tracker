'use client'
import React from 'react'

import DisplayData from './DisplayData';
import { ExpenseProvider } from './ExpenseContext';
import RectangleCard from './Header';
const Main = () => {
  return (
    <ExpenseProvider>
    <div className='p-2'>
      <RectangleCard />
      <DisplayData />
    </div>
    </ExpenseProvider>
  );
}

export default Main
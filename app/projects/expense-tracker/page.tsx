'use client';

import { useState } from 'react';
import { Category, Expense } from './interfaces';
import Form from './Form';
import ExpenseTable from './ExpenseTable';

const categories: Category[] = [
  { id: 1, name: 'Groceries', value: 'groceries' },
  { id: 2, name: 'Utilities', value: 'utilities' },
  { id: 3, name: 'Entertainment', value: 'entertainment' },
];

export default function Page() {
  const [expenseList, setExpenseList] = useState<Expense[]>([]);
  const total = expenseList.reduce((acc, curr) => acc + curr.amount, 0);

  const addExpense = (expense: Expense) => {
    setExpenseList([...expenseList, expense]);
  };

  const deleteExpense = (id: number) => {
    setExpenseList(expenseList.filter(expense => expense.id !== id));
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-6">
      <Form categories={categories} addExpense={addExpense} />
      <ExpenseTable expenseList={expenseList} deleteExpense={deleteExpense} />
      {expenseList.length > 0 && <p>Total Amount: {total}</p>}
    </div>
  );
}

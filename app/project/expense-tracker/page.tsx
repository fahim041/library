'use client';

import { useState } from 'react';
import { Category, Expense } from './interfaces';
import Form from './form';

const categories: Category[] = [
  { id: 1, name: 'Groceries', value: 'groceries' },
  { id: 2, name: 'Utilities', value: 'utilities' },
  { id: 3, name: 'Entertainment', value: 'entertainment' },
];

export default function Page() {
  const [expenseList, setExpenseList] = useState<Expense[]>([]);

  return <div>
    <Form categories={categories}/>
  </div>;
}

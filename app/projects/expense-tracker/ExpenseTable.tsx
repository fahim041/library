import { Expense } from './interfaces';

interface Props {
  expenseList: Expense[];
  deleteExpense: (id: number) => void;
}

export default function ExpenseTable({ expenseList, deleteExpense }: Props) {
  return (
    <div className="w-3/4">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {expenseList.map((expense, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
            >
              <td className="border px-4 py-2">{expense.description}</td>
              <td className="border px-4 py-2">{expense.category}</td>
              <td className="border px-4 py-2">{expense.amount}</td>
              <td className="border px-4 py-2"><button className='border bg-red-500 px-2 py-1 rounded text-white' onClick={() => deleteExpense(expense.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

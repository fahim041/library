import { Category, Expense } from './interfaces';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface Props {
  categories: Category[];
  addExpense: (expense: Expense) => void;
}

const schema = z.object({
  description: z
    .string()
    .min(3, { message: 'Description should be at least 3 characters' }),
  amount: z.number({ invalid_type_error: 'Amount is required' }),
  category: z.string().min(3, { message: 'Category is required' }),
});

export default function Form({ categories, addExpense }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Expense>({
    resolver: zodResolver(schema),
  });

  const handleForm = (data: Expense) => {
    addExpense(data);
    reset();
  };

  return (
      <form className="p-2 w-1/2" onSubmit={handleSubmit(handleForm)}>
        <div className="mb-2">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            className="border p-1 w-full mt-1 rounded"
            {...register('description')}
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            className="border p-1 w-full mt-1 rounded"
            {...register('amount', {valueAsNumber: true})}
          />
          {errors.amount && (
            <p className="text-red-500">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            className="border p-1 w-full rounded mt-2"
            {...register('category')}
          >
            <option value=""></option>
            {categories.map((category) => (
              <option key={category.id} value={category.value}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-red-500">{errors.category.message}</p>
          )}
        </div>
        <button className="border px-2 py-1 rounded disabled:bg-white disabled:text-gray-400">
          Submit
        </button>
      </form>
  );
}

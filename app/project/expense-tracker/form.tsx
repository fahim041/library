import { Category } from './interfaces';

interface Props {
  categories: Category[];
}

export default function Form({ categories }: Props) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <form className="p-2 w-1/2">
        <div className="mb-2">
          <label htmlFor="description">Description</label>
          <input id="description" className="border p-1 w-full mt-1 rounded" />
        </div>
        <div className="mb-2">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            className="border p-1 w-full mt-1 rounded"
          />
        </div>
        <div className='mb-2'>
          <label htmlFor="category">Category</label>
          <select id="category" className="border p-1 w-full rounded mt-2">
            <option></option>
            {categories.map((category) => (
              <option key={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
        <button className='border px-2 py-1 rounded disabled:bg-white disabled:text-gray-400'>Submit</button>
      </form>
    </div>
  );
}

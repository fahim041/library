import Spinner from '@/app/components/tailwind/spinner/Spinner';
import useTodos from './useTodos';
import { useState } from 'react';

export default function Main() {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const [userId, setUserId] = useState<number | null>(null);
  const {
    data: todos,
    error,
    isLoading,
  } = useTodos({
    userId,
    pageSize,
    page,
  });

  if (error) return <p>{error.message}</p>;

  return (
    <div className="p-4">
      <select
        className="border px-2 py-1 mb-2"
        onChange={(e) => setUserId(parseInt(e.target.value))}
        value={userId ? userId : ''}
      >
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>

      {isLoading && <Spinner />}
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <button
        className="border bg-blue-500 text-white mr-2 p-2 disabled:bg-white disabled:text-gray-400"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>
      <button
        className="border bg-blue-500 text-white mr-2 p-2 disabled:bg-white disabled:text-gray-400"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}

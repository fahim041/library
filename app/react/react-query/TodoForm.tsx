import { useRef } from 'react';
import { PostQuery, todoMutation } from './useTodos';

interface Props {
  filter: PostQuery;
}

export default function TodoForm({ filter }: Props) {
  const addTodo = todoMutation(filter, () => {
    console.log('Todo added');
  });
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (ref.current && ref.current.value) {
      addTodo.mutate({
        id: 0,
        title: ref.current?.value,
        completed: false,
        userId: 1,
      });

      if (ref.current) ref.current.value = '';
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={ref} type="text" className="border p-1 mb-2" />
        <button
          disabled={addTodo.isPending}
          type="submit"
          className="border px-1 py-1 ml-2"
        >
          {addTodo.isPending ? 'Adding...' : 'Add'}
        </button>
      </form>
      {addTodo.error && <p className="text-red-500">{addTodo.error.message}</p>}
    </>
  );
}

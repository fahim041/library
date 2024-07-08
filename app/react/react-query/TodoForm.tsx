import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { PostQuery, Todo } from './useTodos';
import axios from 'axios';

interface Props {
  filter: PostQuery;
}

export default function TodoForm({ filter }: Props) {
  const queryClient = useQueryClient();
  const addTodo = useMutation<Todo, Error, Todo>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
        .then((res) => res.data),
    onSuccess: (savedTodo, newTodo) => {
      // invalidate the cache, not works with jsonplaceholder

      // queryClient.invalidateQueries({
      //     queryKey: ['todos']
      // })

      // update the data in cache
      queryClient.setQueryData<Todo[]>(['todos', filter], (todos) => [
        savedTodo,
        ...(todos || []),
      ]);
    },
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
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={ref} type="text" className="border p-1 mb-2" />
        <button type="submit" className="border px-1 py-1 ml-2">
          Add
        </button>
      </form>
      {addTodo.error && <p className='text-red-500'>{addTodo.error.message}</p>}
    </>
  );
}

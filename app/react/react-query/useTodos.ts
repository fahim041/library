import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export interface PostQuery {
  page: number;
  pageSize: number;
  userId: number | null;
}

const useTodos = (query: PostQuery) => {
  const { userId, pageSize, page } = query;
  const fetchTodos = () =>
    axios
      .get<Todo[]>(
        `https://jsonplaceholder.typicode.com/todos?${
          userId ? `userId=${userId}` : ''
        }`,
        {
          params: {
            _start: (page - 1) * pageSize,
            _limit: pageSize,
          },
        }
      )
      .then((res) => res.data);

  return useQuery<Todo[], Error>({
    queryKey: ['todos', query],
    queryFn: fetchTodos,
    staleTime: 10 * 60 * 1000,
    placeholderData: (prev) => prev,
  });
};

export const todoMutation = (filter: PostQuery, onUpdate: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<Todo, Error, Todo>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
        .then((res) => res.data),
    onSuccess: (savedTodo, newTodo) => {
      // invalidate the cache, not works with jsonplaceholder

      // queryClient.invalidateQueries({
      //     queryKey: ['todos', filter]
      // })

      // update the data in cache
      queryClient.setQueryData<Todo[]>(['todos', filter], (todos) => [
        savedTodo,
        ...(todos || []),
      ]);

      // to show the update UI in component
      onUpdate();
    },
  });
};

export default useTodos;

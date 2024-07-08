import { useQuery } from '@tanstack/react-query';
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

export default useTodos;

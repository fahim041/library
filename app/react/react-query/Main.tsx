import Spinner from '@/app/components/tailwind/spinner/Spinner';
import useTodos from './useTodos';

export default function Main() {
  const { data: todos, error, isLoading } = useTodos();

  if (error) return <p>{error.message}</p>;

  return (
    <div className="p-4">
      {isLoading && <Spinner />}
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

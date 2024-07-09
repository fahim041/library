import { useReducer } from 'react';
import tasksReducer from './reducers/tasksReducer';

export default function TaskList() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <div className="p-4">
      <button
        className="border p-2 mb-2"
        onClick={() =>
          dispatch({
            type: 'ADD',
            task: { id: Date.now(), title: 'Task' + Date.now() },
          })
        }
      >
        Add Todo
      </button>
      <ul className="w-3/4">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between border p-2">
            <div>{task.title}</div>
            <div>
              <button
                className="border p-2"
                onClick={() => dispatch({ type: 'DELETE', taskId: task.id })}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

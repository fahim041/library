import { useTask } from './context/taskContext';

export default function TaskList() {
  const {tasks, dispatch} = useTask();

  return (
    <div>
      <button
        className="border p-1 mb-2"
        onClick={() => {
          dispatch({
            type: 'ADD',
            task: { id: Date.now(), title: 'Task ' + Date.now() },
          });
        }}
      >
        Add Task
      </button>
      {tasks && tasks.map((task) => (
        <div
          key={task.id}
          className="border p-2 flex justify-between items-center w-1/2"
        >
          <div>{task.title}</div>
          <button
            className="border p-1"
            onClick={() => dispatch({ type: 'DELETE', taskId: task.id })}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

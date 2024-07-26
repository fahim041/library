import { Dispatch, ReactNode, createContext, useContext, useReducer } from 'react';
import { Task, TaskAction } from '../reducers/taskReducer';
import taskReducer from '../reducers/taskReducer';

interface TaskContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TaskContext = createContext<TaskContextType>({} as TaskContextType);

interface Props {
  children: ReactNode;
}

const TaskProvider = ({children}: Props) => {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);
  const value = { tasks, dispatch: taskDispatch };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export default TaskProvider;

export const useTask = () => useContext(TaskContext);
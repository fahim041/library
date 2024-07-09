import { Dispatch, createContext } from 'react';
import { Task, TaskAction } from '../reducers/taskReducer';

interface TaskContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const taskContext = createContext<TaskContextType>({} as TaskContextType);

export default taskContext;

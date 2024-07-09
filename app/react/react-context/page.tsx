'use client';
import { useReducer } from 'react';
import authReducer from './reducers/authReducer';
import Home from './Home';
import Navbar from './Navbar';
import authContext from './context/authContext';
import taskReducer from './reducers/taskReducer';
import taskContext from './context/taskContext';

export default function Page() {
  const [user, authDispatch] = useReducer(authReducer, '');
  const [tasks, taskDispatch] = useReducer(taskReducer, []);

  return (
    <authContext.Provider value={{ user, dispatch: authDispatch }}>
      <taskContext.Provider value={{ tasks, dispatch: taskDispatch }}>
        <Navbar />
        <div className="p-4">
          <Home />
        </div>
      </taskContext.Provider>
    </authContext.Provider>
  );
}

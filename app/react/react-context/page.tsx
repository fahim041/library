'use client';
import { useReducer } from 'react';
import authReducer from './reducers/authReducer';
import Home from './Home';
import Navbar from './Navbar';
import authContext from './context/authContext';
import TaskProvider from './context/TaskContext';

export default function Page() {
  const [user, authDispatch] = useReducer(authReducer, '');

  return (
    <authContext.Provider value={{ user, dispatch: authDispatch }}>
      <TaskProvider>
        <Navbar />
        <div className="p-4">
          <Home />
        </div>
      </TaskProvider>
    </authContext.Provider>
  );
}

'use client';
import { useReducer } from 'react';
import authReducer from './reducers/authReducer';
import Home from './Home';
import Navbar from './Navbar';
import authContext from './context/authContext';

export default function Page() {
  const [user, dispatch] = useReducer(authReducer, '');

  return (
    <authContext.Provider value={{ user, dispatch }}>
      <Navbar />
      <div className="p-4">
        <Home />
      </div>
    </authContext.Provider>
  );
}

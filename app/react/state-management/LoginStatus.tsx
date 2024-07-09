import { useContext } from 'react';
import userContext from './context/userContext';

export default function LoginStatus() {
  const { user, dispatch } = useContext(userContext);

  return (
    <div>
      {user ? (
        <>
          <button onClick={() => dispatch({ type: 'LOGOUT' })} className='border p-2 bg-red-500 text-white'>Logout</button>
        </>
      ) : (
        <button onClick={() => dispatch({ type: 'LOGIN', payload: 'user -1' })} className='border p-2 bg-blue-500 text-white'>
          Login
        </button>
      )}
    </div>
  );
}

import { useContext } from 'react';
import LoginStatus from './LoginStatus';
import userContext from './context/userContext';

export default function Navbar() {
  const { user } = useContext(userContext);

  return (
    <div className="p-4">
      <p>Navbar</p>
      <div className='w-full flex justify-between'>
        <p>User: {user}</p>
        <LoginStatus />
      </div>
    </div>
  );
}

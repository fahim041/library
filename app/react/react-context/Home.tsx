import { useContext } from 'react';
import authContext from './context/authContext';

export default function Home() {
  const { user } = useContext(authContext);

  return (
    <>
      <div>Home</div>
      <p>user: {user}</p>
    </>
  );
}

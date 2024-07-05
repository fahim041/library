'use client';
import Spinner from '@/app/components/tailwind/spinner/Spinner';
import { useEffect, useState } from 'react';
import UserService, {User} from './user-service';
import { CanceledError } from './api-client';

export default function Page() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    const { request, cancel } = UserService.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => cancel();
  }, []);

  return (
    <div className="px-5 py-2">
      {error && <p className="text-red-500">{error}</p>}
      {isLoading && <Spinner />}
      <ul className="list-disc">
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

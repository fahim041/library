import { useEffect, useState } from 'react';
import { User } from './user-service';
import UserService from './user-service';
import { CanceledError } from './api-client';

const useUsers = () => {
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

  return { users, error, isLoading };
};

export default useUsers;

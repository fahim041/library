import useAuthStore from './store/authStore';

export default function Navbar() {
  const { user, login, logout } = useAuthStore();

  return (
    <div className="p-4 bg-blue-600 text-white flex justify-between">
      <h3>Navbar</h3>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login('User-1')}>Login</button>
      )}
    </div>
  );
}

import { useContext } from "react";
import authContext from "./context/authContext";

export default function AuthStatus() {
    const {user, dispatch} = useContext(authContext);

  return (
    <>
      {user ? (
        <button
          className="p-1 border"
          onClick={() => dispatch({ type: 'LOGOUT' })}
        >
          Logout
        </button>
      ) : (
        <button
          className="p-1 border"
          onClick={() => dispatch({ type: 'LOGIN', payload: 'user-1' })}
        >
          Login
        </button>
      )}
    </>
  );
}

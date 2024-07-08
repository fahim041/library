import { useReducer } from 'react';
import counterReducer from './reducers/counterReducer';

export default function Child() {
  const [value, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <h3>Child Component</h3>

      <button
        className="border p-2"
        onClick={() => dispatch({ type: 'INCREMENT' })}
      >
        Increase
      </button>
    </div>
  );
}

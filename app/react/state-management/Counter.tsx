import { useReducer } from 'react';
import counterReducer from './reducers/counterReducer';
import Child from './Child';

export default function Counter() {
  const [value, dispatch] = useReducer(counterReducer, 0);

  return (
    <div className="p-4">
      <div className="mb-4">
        <h3>State Management</h3>

        <p>Counter: {value}</p>

        <button
          className="border p-2"
          onClick={() => dispatch({ type: 'INCREMENT' })}
        >
          Increase
        </button>
        <button
          className="border p-2"
          onClick={() => dispatch({ type: 'DECREMENT' })}
        >
          Decrease
        </button>
        <button
          className="border p-2"
          onClick={() => dispatch({ type: 'RESET' })}
        >
          Reset
        </button>
      </div>

      <Child />
    </div>
  );
}

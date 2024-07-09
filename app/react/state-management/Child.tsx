import { useContext } from 'react';
import CounterContext from './context/counterContext';

export default function Child() {
  const { dispatch } = useContext(CounterContext);

  return (
    <div className="p-4">
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

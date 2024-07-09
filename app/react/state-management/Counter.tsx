import { useContext } from "react";
import CounterContext from "./context/counterContext";

export default function Counter() {
  const {count: value, dispatch} = useContext(CounterContext);

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
    </div>
  );
}

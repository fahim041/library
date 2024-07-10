import useCounterStore from './store/counterStore';

export default function Counter() {
  const { counter, increment, decrement, reset } = useCounterStore();

  return (
    <div>
      <p>Counter: {counter}</p>

      <div className='flex gap-2'>
        <button className='border p-1' onClick={increment}>Increment</button>
        <button className='border p-1' onClick={decrement}>Decrement</button>
        <button className='border p-1' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

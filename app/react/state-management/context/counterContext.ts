import { Dispatch, createContext } from 'react';
import { Action } from '../reducers/counterReducer';

interface CounterContextType {
  count: number;
  dispatch: Dispatch<Action>
}

const CounterContext = createContext<CounterContextType>({} as CounterContextType);

export default CounterContext;
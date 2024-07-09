import { Dispatch, createContext } from 'react';

interface LoginAction {
  type: 'LOGIN';
  payload: string;
}

interface LogoutAction {
  type: 'LOGOUT';
}

type Action = LoginAction | LogoutAction;

export const userReducer = (user: string, action: Action): string => {
  if (action.type === 'LOGIN') return action.payload;
  if (action.type === 'LOGOUT') return '';
  return user;
};

interface UserContextType {
  user: string;
  dispatch: Dispatch<Action>;
}

const userContext = createContext<UserContextType>({} as UserContextType);

export default userContext;

interface LoginAction {
    type: 'LOGIN',
    payload: string;
}

interface LogoutAction {
    type: 'LOGOUT',
}

export type AuthAction = LoginAction | LogoutAction;

const authReducer = (user: string, action: AuthAction) => {
    if(action.type === 'LOGIN') return action.payload;
    if(action.type === 'LOGOUT') return '';
    return user;
}

export default authReducer;
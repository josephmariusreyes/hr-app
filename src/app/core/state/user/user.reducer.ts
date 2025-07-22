import { createReducer, on } from '@ngrx/store';
import { IUser } from '../../models/user.model';
import { initUser, loginSuccess, logout } from './user.action';

export interface UserState {
  user: IUser | null;
}

const initialState: UserState = {
  user: null
};

export const userReducer = createReducer(
  initialState,
  on(initUser, (state) => {
    //This is temporary, 
    //we will have a token moving that we will always authenticate against the server API
    const userJson = localStorage.getItem('user');
    const user = userJson ? JSON.parse(userJson) : null;
    return { ...state, user };
  }),
  on(loginSuccess, (state, { user }) => ({ ...state, user })),
  on(logout, state => {
    localStorage.removeItem('user');
    return { ...state, user: null };
  })
);

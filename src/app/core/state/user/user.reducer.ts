import { createReducer, on } from '@ngrx/store';
import { IUser } from '../../models/user.model';
import { loginSuccess, logout } from './user.action';

export interface UserState {
  user: IUser | null;
}

const initialState: UserState = {
  user: null
};

export const userReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user }) => ({ ...state, user })),
  on(logout, state => ({ ...state, user: null }))
);

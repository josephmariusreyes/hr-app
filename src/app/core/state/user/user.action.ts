import { createAction, props } from '@ngrx/store';
import { IUser } from '../../models/user.model';

export const initUser = createAction('[User] Init User');

export const loginSuccess = createAction(
  '[User] Login Success',
  props<{ user: IUser }>()
);

export const logout = createAction('[User] Logout');

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { IUser } from "../models/user.model";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as UserActions from "../state/user/user.action";
import { selectCurrentUser } from "../state/user/user.selectors";

@Injectable({ providedIn: 'root' })

export class UserService {
  private users: IUser[] = [];

  constructor(private http: HttpClient, private store: Store, private router: Router) {
    this.loadUsers();
  }

  loadUsers() {
    //this is a temporary code, just to mock getting the users
    this.http.get<IUser[]>('app-users.json').subscribe(users => {
      this.users = users;
    });
  }

  getCurrentUser(): Observable<IUser | null> {
    return this.store.select(selectCurrentUser);
  }  
  
  login(username: string, password: string) {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      this.store.dispatch(UserActions.loginSuccess({ user }));
      this.router.navigate(['dashboard/landing']);
    } else {
      alert('Invalid credentials');
    }
  }

  register(newUser: IUser) {
  }

  logout() {
    localStorage.removeItem('user');
    this.store.dispatch(UserActions.logout());
  }
}

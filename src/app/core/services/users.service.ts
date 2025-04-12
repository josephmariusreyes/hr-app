import { Injectable } from "@angular/core";
import { IUser } from "../models/user.model";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";

@Injectable({ providedIn: 'root' })

export class UserService {
  private users: IUser[] = [];

  constructor(private http: HttpClient, private store: Store) {
    this.loadUsers();
  }

  loadUsers() {
    this.http.get<IUser[]>('/assets/data/users.json').subscribe(users => {
      this.users = users;
    });
  }

  login(username: string, password: string) {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      //this.store.dispatch(UserActions.loginSuccess({ user }));
    } else {
      alert('Invalid credentials');
    }
  }

  register(newUser: IUser) {
    const id = Math.max(...this.users.map(u => u.id)) + 1;
    const user = { ...newUser, id };
    this.users.push(user);
    return user;
  }
}

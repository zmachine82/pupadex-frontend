
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  currentUser: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor() {
    this.loadUser();
  }

  saveUser(user: User) {
    localStorage.setItem('token', user.token);
    localStorage.setItem('firstName', user.first_name);
    localStorage.setItem('nickname', user.nickname);
    localStorage.setItem('userId', user.id.toString());
    this.currentUser.next(user);
  }

  loadUser() {
    const user = new User();
    user.token = localStorage.getItem('token');
    user.first_name = localStorage.getItem('firstName');
    user.nickname = localStorage.getItem('nickname');
    user.id = Number(localStorage.getItem('userId'));
    if(user.token !== null && user.token !== undefined) {
      this.currentUser.next(user);
    }
  }

  logoutUser() {
    localStorage.clear();
  }

  getToken() {
    return this.currentUser.getValue().token
  }

  isLoggedIn() {
    const user = this.currentUser.getValue();
    if(user !== null) {
      const token = user.token;
      return token !== null
    }

    return false;
  }

}

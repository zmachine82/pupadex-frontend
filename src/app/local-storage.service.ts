import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  currentUser: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private router: Router) {
    this.loadUser();
  }

  saveUser(user: User) {
    localStorage.setItem('token', user.token);
    localStorage.setItem('userEmail', user.email);
    localStorage.setItem('firstName', user.first_name);
    localStorage.setItem('lastName', user.last_name);
    localStorage.setItem('nickname', user.nickname);
    localStorage.setItem('userId', user.id.toString());
    if (user.image !== undefined) {
      localStorage.setItem('profilePic', user.image);
    }
    this.currentUser.next(user);
  }

  loadUser() {
    const user = new User();
    user.token = localStorage.getItem('token');
    user.first_name = localStorage.getItem('firstName');
    user.last_name = localStorage.getItem('lastName');
    user.email = localStorage.getItem('userEmail');
    user.nickname = localStorage.getItem('nickname');
    user.id = Number(localStorage.getItem('userId'));
    user.image = localStorage.getItem('profilePic') === undefined ? "https://bondvet.com/wp-content/uploads/2019/06/adorable-animal-canine-248307-520x347.jpg" : localStorage.getItem('profilePic')
   
    if(user.token !== null && user.token !== undefined) {
      this.currentUser.next(user);
    }
  }

  logoutUser() {
    localStorage.clear();
    this.currentUser.next(null);
    this.router.navigate([''])
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

import { Observable } from 'rxjs';
import { NewUser } from './models/new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  signup(newUser: NewUser) {
    return this.http.post(this.baseUrl + 'users/create', newUser);
  }

  signIn(user: NewUser) {
    return this.http.post(this.baseUrl + "users/login", user);
  }

  updateUser(updatedUser: User): Observable<User> {
    return this.http.put<User>(this.baseUrl + "users/update", updatedUser);
  }
}

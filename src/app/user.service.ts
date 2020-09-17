import { NewUser } from './models/new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';

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
}

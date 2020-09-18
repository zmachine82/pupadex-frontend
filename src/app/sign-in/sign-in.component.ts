import { User } from './../models/user';
import { LocalStorageService } from './../local-storage.service';
import { UserService } from './../user.service';
import { NewUser } from './../models/new-user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  user: NewUser = new NewUser();

  constructor(private userService: UserService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    
  }

  signIn() {
    this.userService.signIn(this.user).subscribe((data: User) => {
      this.localStorageService.saveUser(data);
    });
  }

}

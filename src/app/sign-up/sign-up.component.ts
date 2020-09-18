import { LocalStorageService } from './../local-storage.service';
import { User } from './../models/user';
import { UserService } from './../user.service';
import { NewUser } from './../models/new-user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  newUser: NewUser = new NewUser();

  constructor(private userService: UserService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  submitUser() {
    this.userService.signup(this.newUser).subscribe((data: User) => {
      this.localStorageService.saveUser(data);
    });
  }

}

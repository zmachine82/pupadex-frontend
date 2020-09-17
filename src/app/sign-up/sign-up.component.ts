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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  submitUser() {
    this.userService.signup(this.newUser).subscribe((data: any) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('firstName', data.first_name);
      localStorage.setItem('nickname', data.nickname);

    });
  }

}

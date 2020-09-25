import { Router } from '@angular/router';
import { LocalStorageService } from './../local-storage.service';
import { User } from './../models/user';
import { UserService } from './../user.service';
import { NewUser } from './../models/new-user';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  formGroup = new FormGroup({
    nickname: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private userService: UserService, private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {

  }

  submitUser() {
    const newUser = new NewUser(this.formGroup.value)
    this.userService.signup(newUser).subscribe((data: User) => {
      this.localStorageService.saveUser(data);
      this.router.navigateByUrl('');
    });
  }

}

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from './../models/user';
import { LocalStorageService } from './../local-storage.service';
import { UserService } from './../user.service';
import { NewUser } from './../models/new-user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });



  signInError = false;

  constructor(private router: Router, private userService: UserService, private localStorageService: LocalStorageService, private fb:FormBuilder) { }

  ngOnInit(): void {
    
  }

  signIn() {
    const newUser = new NewUser(this.formGroup.value)
    this.userService.signIn(newUser).subscribe((data: User) => {
      this.localStorageService.saveUser(data);
      if(data) {
        this.router.navigate(['puppies'])
      } 
    }, err => this.signInError = true);
  }
  

}

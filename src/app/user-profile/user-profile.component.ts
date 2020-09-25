import { UserService } from './../user.service';
import { User } from './../models/user';
import { LocalStorageService } from './../local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  currentUser: User;
  newProfilePicUrl: string;
  newNickname: string;

  constructor(private localStorageService: LocalStorageService, private userService: UserService) { }

  ngOnInit(): void {
    this.localStorageService.currentUser.subscribe(data => {
  
      if (data) {
        this.currentUser = data;
        if (data.image === null || data.image === undefined) {
          this.currentUser.image = "https://bondvet.com/wp-content/uploads/2019/06/adorable-animal-canine-248307-520x347.jpg";
        }
      }
    })
  }

  saveProfilePic(popup) {
    this.currentUser.image = this.newProfilePicUrl
    this.userService.updateUser(this.currentUser).subscribe(data => {
      this.localStorageService.saveUser(data);
    })
    popup.close()
  }

  saveNickname(popup) {
    this.currentUser.nickname = this.newNickname;
    this.userService.updateUser(this.currentUser).subscribe(data => {
      this.localStorageService.saveUser(data);
    })
    popup.close()
  }

}

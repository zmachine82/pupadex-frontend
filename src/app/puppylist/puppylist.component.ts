import { LocalStorageService } from './../local-storage.service';
import { PuppyService } from './../puppy.service';
import { Component, OnInit } from '@angular/core';
import { Puppy } from '../models/puppy';
import { Router } from '@angular/router';

@Component({
  selector: 'app-puppylist',
  templateUrl: './puppylist.component.html',
  styleUrls: ['./puppylist.component.scss']
})
export class PuppylistComponent implements OnInit {

  puppies: Puppy[] = [ ]
  constructor(private puppyService: PuppyService, private router: Router, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.puppyService.getAllPuppies().subscribe(data => {
      this.puppies = data.puppies;
    })
  }

  profile(puppy: Puppy) {
    this.router.navigate(['dogprofile', puppy.id])
  }

  loggedIn() {
    return this.localStorageService.isLoggedIn();
  }

}

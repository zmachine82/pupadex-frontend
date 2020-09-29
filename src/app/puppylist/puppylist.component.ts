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
  constructor(private puppyService: PuppyService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.puppyService.getAllPuppies().subscribe(data => {
      this.puppies = data.puppies;
    })
  }


  loggedIn() {
    return this.localStorageService.isLoggedIn();
  }

}

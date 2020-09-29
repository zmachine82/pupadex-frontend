import { Router } from '@angular/router';
import { Puppy } from './../models/puppy';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-puppylist-card',
  templateUrl: './puppylist-card.component.html',
  styleUrls: ['./puppylist-card.component.scss']
})
export class PuppylistCardComponent implements OnInit {

  @Input() puppy: Puppy;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  profile(puppy: Puppy) {
    this.router.navigate(['dogprofile', puppy.id])
  }

}

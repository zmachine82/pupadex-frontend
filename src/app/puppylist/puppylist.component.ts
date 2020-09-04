import { Component, OnInit } from '@angular/core';
import { Puppy } from '../models/puppy';

@Component({
  selector: 'app-puppylist',
  templateUrl: './puppylist.component.html',
  styleUrls: ['./puppylist.component.scss']
})
export class PuppylistComponent implements OnInit {

  puppies: Puppy[] = [{
    name: "Walter",
    breed: "Blue Heeler",
    age: 7,
    image: "https://cf.ltkcdn.net/dogs/images/orig/236062-1600x1060-blue-heeler-puppies.jpg"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}

import { PuppyService } from './../puppy.service';
import { Component, OnInit } from '@angular/core';
import { Puppy } from '../models/puppy';

@Component({
  selector: 'app-puppylist',
  templateUrl: './puppylist.component.html',
  styleUrls: ['./puppylist.component.scss']
})
export class PuppylistComponent implements OnInit {

  puppies: Puppy[] = [ ]
  constructor(private puppyService: PuppyService) { }

  ngOnInit(): void {
    this.puppyService.getAllPuppies().subscribe(data => {
      this.puppies = data.puppies;
    })
  }

}

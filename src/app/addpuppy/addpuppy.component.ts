import { Component, OnInit } from '@angular/core';
import { PuppyService } from './../puppy.service';
import { Puppy } from './../models/puppy';

@Component({
  selector: 'app-addpuppy',
  templateUrl: './addpuppy.component.html',
  styleUrls: ['./addpuppy.component.scss']
})
export class AddpuppyComponent implements OnInit {
  puppy: Puppy = new Puppy
  constructor(private puppyService: PuppyService) { }

  ngOnInit(): void {
  }

  submitPuppy() {
    this.puppyService.createPuppy(this.puppy).subscribe((data: any) => {
      localStorage.setItem('name', data.name);
      localStorage.setItem('breed', data.breed);
      localStorage.setItem('age', data.age);
      localStorage.setItem('image', data.image);

    });


  }
}
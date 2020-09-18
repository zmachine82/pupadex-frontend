import { PuppyService } from './../puppy.service';
import { Puppy } from './../models/puppy';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-puppy',
  templateUrl: './add-puppy.component.html',
  styleUrls: ['./add-puppy.component.scss']
})
export class AddPuppyComponent implements OnInit {

  newPuppy: Puppy = new Puppy();

  constructor(private puppyService: PuppyService) { }

  ngOnInit(): void {
  }

  addPuppy() {
    this.puppyService.addPuppy(this.newPuppy).subscribe(data => {
      console.log(data);
    });
  }

}

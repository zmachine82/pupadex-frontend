import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  formGroup: FormGroup = new FormGroup({
    wow: new FormControl('')
  })

  ngOnInit(): void {
    var audio = new Audio();
    audio.src = "assets/wowb.mp3";
    this.formGroup.valueChanges.subscribe(change => {
      audio.load();
      audio.play();
    })
    
  }
}

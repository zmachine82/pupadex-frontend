import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  homeNav() {
    this.router.navigate(['puppies'])
  }
  addPuppyNav() {
    this.router.navigate(['addpuppy'])
  }
}

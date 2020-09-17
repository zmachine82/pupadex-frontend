import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  signedIn = false;
  nickname = '';
  closeResult = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.nickname = localStorage.getItem('nickname');
    if (this.nickname !== null && this.nickname !== undefined && this.nickname !== '') {
      this.signedIn = true;
    }
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  puppiesNav() {
    this.router.navigate(['puppies'])
  }

  homeNav() {
    this.router.navigate(['home'])
  }
  addPuppyNav() {
    this.router.navigate(['addpuppy'])
  }
}

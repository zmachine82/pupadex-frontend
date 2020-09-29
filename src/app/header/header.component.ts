import { FormModalOption } from './../models/FormModalOption';
import { LocalStorageService } from './../local-storage.service';
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

  signInModal = false;
  signInModalData: FormModalOption[] = [{label: "first input", type: 'text', required: true}, {label: "wow", type: 'radio', required: false}]

  constructor(private modalService: NgbModal, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.localStorageService.currentUser.subscribe(data => {
      if(data) {
        this.signedIn = true;
        this.nickname = data.nickname;
      } else {
        this.signedIn = false;
      }
    });
  }

  modalSaved(event) {
    console.log(event);
    console.log('wow it is saved')
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  logout() {
    this.localStorageService.logoutUser()
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

}

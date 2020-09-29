import { FormModalOption } from './../models/FormModalOption';
import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit, OnChanges {

  @Input() data: FormModalOption[] = [];
  @Input() openModal: boolean = false;
  @Output() openModalChange: EventEmitter<boolean> = new EventEmitter();
  @Output() saved: EventEmitter<any> = new EventEmitter();

  currentModal: NgbModalRef;

  @ViewChild('content') content: ElementRef;

  closeResult = '';

  form: FormGroup = new FormGroup({});

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.modalService.activeInstances.subscribe((list) => {
      this.currentModal = list[0]
    });
  }

  ngOnChanges() {
    if (this.openModal) {
      this.open();
      this.form = new FormGroup({});
      this.data.forEach(element => {
        this.form.addControl(element.label, new FormControl(''))
        if(element.required) {
          this.form.get(element.label).setValidators( Validators.required)
        }
      });
    }
  }

  // addInput(element: any) {
  //   this.form.addControl(element.label, new FormControl(''))

  //   const container = document.getElementsByClassName('input-container')[0];

  //   const label = document.createElement("label");
  //   label.innerText = element.label

  //   const input = document.createElement("input");
 
  //   if (element.type) {
  //    input.type = element.type;
  //   } else {
  //     input.type = "text"
  //   }
  //   input.name = "input" + element.label;
  //   input.setAttribute('formControlName', element.label);
  //   input.setAttributeNS(null, "formControlName",element.label);

    
  //   container.appendChild(label);
  //   container.appendChild(input);
  // }

  open() {
    this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(`Closed with: ${result}`);
      this.openModalChange.emit(false);
      this.saved.emit(this.form.value);
    }, (reason) => {
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
      this.openModalChange.emit(false);
    });
  }

  cancel() {
    this.currentModal.dismiss(" cancelled")
  }

  closeWithData() {
    this.currentModal.close(this.form.value)
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

  // Input - [{label:, type: }]
  // Build out an object to pass around

  // dynamically build our html based on the input

  // trigger some output when the save is called

  // save and cancel UI interface

}
  
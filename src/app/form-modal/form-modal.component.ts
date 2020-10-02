import { FormModalOption } from './../models/FormModalOption';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit, OnChanges, AfterViewChecked {

  @Input() data: FormModalOption[] = [];
  @Input() openModal: boolean = false;
  @Output() openModalChange: EventEmitter<boolean> = new EventEmitter();
  @Output() saved: EventEmitter<any> = new EventEmitter();

  currentModal: NgbModalRef;

  @ViewChild('content') content: TemplateRef<any>;

  closeResult = '';

  form: FormGroup = new FormGroup({});

  constructor(private modalService: NgbModal, private renderer:Renderer2) { }
  ngAfterViewChecked(): void {
  
  }

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
        const label = this.renderer.createElement("label");
        label.innerText = element.label

        const input = this.renderer.createElement("input");
    
        if (element.type) {
          input.type = element.type;
        } else {
          input.type = "text"
        }
        input.name = "input" + element.label;
        this.renderer.setAttribute(input, 'formControlName', element.label);
       
        if(element.required) {
          this.form.get(element.label).setValidators( Validators.required)
        }

        if(this.content) {

          // this.renderer.appendChild(this.inputContainer, label)
          // this.renderer.appendChild(this.inputContainer, input)
          // this.renderer.listen
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
    const ref = this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'})
    // console.log(this.content.)
    // console.log("primaryColorSample:", this.inputContainer);
    // console.log("primaryColorSample:", this.template);

    ref.result.then((result) => {
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

}
  
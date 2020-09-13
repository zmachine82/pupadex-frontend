import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpuppyComponent } from './addpuppy.component';

describe('AddpuppyComponent', () => {
  let component: AddpuppyComponent;
  let fixture: ComponentFixture<AddpuppyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpuppyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpuppyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

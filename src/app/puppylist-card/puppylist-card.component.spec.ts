import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuppylistCardComponent } from './puppylist-card.component';

describe('PuppylistCardComponent', () => {
  let component: PuppylistCardComponent;
  let fixture: ComponentFixture<PuppylistCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuppylistCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuppylistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

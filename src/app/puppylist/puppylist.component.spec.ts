import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuppylistComponent } from './puppylist.component';

describe('PuppylistComponent', () => {
  let component: PuppylistComponent;
  let fixture: ComponentFixture<PuppylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuppylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuppylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

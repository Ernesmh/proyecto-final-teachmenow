import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindteachersComponent } from './findteachers.component';

describe('FindteachersComponent', () => {
  let component: FindteachersComponent;
  let fixture: ComponentFixture<FindteachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindteachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindteachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

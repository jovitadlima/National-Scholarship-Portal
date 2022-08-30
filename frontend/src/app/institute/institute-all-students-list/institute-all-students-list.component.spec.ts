import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteAllStudentsListComponent } from './institute-all-students-list.component';

describe('InstituteAllStudentsListComponent', () => {
  let component: InstituteAllStudentsListComponent;
  let fixture: ComponentFixture<InstituteAllStudentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteAllStudentsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteAllStudentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

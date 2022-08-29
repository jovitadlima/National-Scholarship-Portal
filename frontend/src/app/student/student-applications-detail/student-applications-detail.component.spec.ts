import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentApplicationsDetailComponent } from './student-applications-detail.component';

describe('StudentApplicationsDetailComponent', () => {
  let component: StudentApplicationsDetailComponent;
  let fixture: ComponentFixture<StudentApplicationsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentApplicationsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentApplicationsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

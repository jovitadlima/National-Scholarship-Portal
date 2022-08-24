import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryStudentApplicationDetailsComponent } from './ministry-student-application-details.component';

describe('MinistryStudentApplicationDetailsComponent', () => {
  let component: MinistryStudentApplicationDetailsComponent;
  let fixture: ComponentFixture<MinistryStudentApplicationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistryStudentApplicationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistryStudentApplicationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

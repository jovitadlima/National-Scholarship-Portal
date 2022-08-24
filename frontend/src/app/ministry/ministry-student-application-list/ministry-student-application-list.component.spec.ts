import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryStudentApplicationListComponent } from './ministry-student-application-list.component';

describe('MinistryStudentApplicationListComponent', () => {
  let component: MinistryStudentApplicationListComponent;
  let fixture: ComponentFixture<MinistryStudentApplicationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistryStudentApplicationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistryStudentApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

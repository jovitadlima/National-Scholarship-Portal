import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteApprovedApplicationsListComponent } from './institute-approved-applications-list.component';

describe('InstituteApprovedApplicationsListComponent', () => {
  let component: InstituteApprovedApplicationsListComponent;
  let fixture: ComponentFixture<InstituteApprovedApplicationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteApprovedApplicationsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteApprovedApplicationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryInstituteRegistrationRequestListComponent } from './ministry-institute-registration-request-list.component';

describe('MinistryInstituteRegistrationRequestListComponent', () => {
  let component: MinistryInstituteRegistrationRequestListComponent;
  let fixture: ComponentFixture<MinistryInstituteRegistrationRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistryInstituteRegistrationRequestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistryInstituteRegistrationRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

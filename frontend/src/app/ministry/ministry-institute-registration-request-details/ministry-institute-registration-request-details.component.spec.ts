import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryInstituteRegistrationRequestDetailsComponent } from './ministry-institute-registration-request-details.component';

describe('MinistryInstituteRegistrationRequestDetailsComponent', () => {
  let component: MinistryInstituteRegistrationRequestDetailsComponent;
  let fixture: ComponentFixture<MinistryInstituteRegistrationRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistryInstituteRegistrationRequestDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistryInstituteRegistrationRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

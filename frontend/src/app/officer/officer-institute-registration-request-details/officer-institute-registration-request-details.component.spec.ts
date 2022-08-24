import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerInstituteRegistrationRequestDetailsComponent } from './officer-institute-registration-request-details.component';

describe('OfficerInstituteRegistrationRequestDetailsComponent', () => {
  let component: OfficerInstituteRegistrationRequestDetailsComponent;
  let fixture: ComponentFixture<OfficerInstituteRegistrationRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerInstituteRegistrationRequestDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerInstituteRegistrationRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

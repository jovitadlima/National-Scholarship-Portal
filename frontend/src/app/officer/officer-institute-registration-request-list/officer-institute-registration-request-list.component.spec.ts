import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerInstituteRegistrationRequestListComponent } from './officer-institute-registration-request-list.component';

describe('OfficerInstituteRegistrationRequestListComponent', () => {
  let component: OfficerInstituteRegistrationRequestListComponent;
  let fixture: ComponentFixture<OfficerInstituteRegistrationRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerInstituteRegistrationRequestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerInstituteRegistrationRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

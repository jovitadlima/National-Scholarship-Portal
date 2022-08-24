import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteViewApplicationDetailsComponent } from './institute-view-application-details.component';

describe('InstituteViewApplicationDetailsComponent', () => {
  let component: InstituteViewApplicationDetailsComponent;
  let fixture: ComponentFixture<InstituteViewApplicationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteViewApplicationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteViewApplicationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

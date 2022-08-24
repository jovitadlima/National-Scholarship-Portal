import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewScholarshipApplicationDetailsComponent } from './view-scholarship-application-details.component';

describe('ViewScholarshipApplicationDetailsComponent', () => {
  let component: ViewScholarshipApplicationDetailsComponent;
  let fixture: ComponentFixture<ViewScholarshipApplicationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewScholarshipApplicationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewScholarshipApplicationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

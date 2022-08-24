import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewScholarshipApplicationListComponent } from './view-scholarship-application-list.component';

describe('ViewScholarshipApplicationListComponent', () => {
  let component: ViewScholarshipApplicationListComponent;
  let fixture: ComponentFixture<ViewScholarshipApplicationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewScholarshipApplicationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewScholarshipApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSchemeDetailsComponent } from './student-scheme-details.component';

describe('StudentSchemeDetailsComponent', () => {
  let component: StudentSchemeDetailsComponent;
  let fixture: ComponentFixture<StudentSchemeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSchemeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSchemeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

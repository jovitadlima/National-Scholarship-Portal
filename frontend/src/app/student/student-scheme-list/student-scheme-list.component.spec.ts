import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSchemeListComponent } from './student-scheme-list.component';

describe('StudentSchemeListComponent', () => {
  let component: StudentSchemeListComponent;
  let fixture: ComponentFixture<StudentSchemeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSchemeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSchemeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

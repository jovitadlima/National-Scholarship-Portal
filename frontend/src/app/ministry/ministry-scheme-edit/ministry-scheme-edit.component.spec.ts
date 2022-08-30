import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistrySchemeEditComponent } from './ministry-scheme-edit.component';

describe('MinistrySchemeEditComponent', () => {
  let component: MinistrySchemeEditComponent;
  let fixture: ComponentFixture<MinistrySchemeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistrySchemeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistrySchemeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistrySchemeAddComponent } from './ministry-scheme-add.component';

describe('MinistrySchemeAddComponent', () => {
  let component: MinistrySchemeAddComponent;
  let fixture: ComponentFixture<MinistrySchemeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistrySchemeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistrySchemeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

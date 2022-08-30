import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistrySchemeDetailsComponent } from './ministry-scheme-details.component';

describe('MinistrySchemeDetailsComponent', () => {
  let component: MinistrySchemeDetailsComponent;
  let fixture: ComponentFixture<MinistrySchemeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistrySchemeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistrySchemeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

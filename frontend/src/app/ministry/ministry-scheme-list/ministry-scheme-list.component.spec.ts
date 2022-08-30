import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistrySchemeListComponent } from './ministry-scheme-list.component';

describe('MinistrySchemeListComponent', () => {
  let component: MinistrySchemeListComponent;
  let fixture: ComponentFixture<MinistrySchemeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistrySchemeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistrySchemeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

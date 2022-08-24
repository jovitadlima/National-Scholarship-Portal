import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteViewApplicationListComponent } from './institute-view-application-list.component';

describe('InstituteViewApplicationListComponent', () => {
  let component: InstituteViewApplicationListComponent;
  let fixture: ComponentFixture<InstituteViewApplicationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteViewApplicationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteViewApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

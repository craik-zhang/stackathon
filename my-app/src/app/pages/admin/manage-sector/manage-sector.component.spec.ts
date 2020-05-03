import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSectorComponent } from './manage-sector.component';

describe('ManageSectorComponent', () => {
  let component: ManageSectorComponent;
  let fixture: ComponentFixture<ManageSectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

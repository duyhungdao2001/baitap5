import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HCMComponent } from './hcm.component';

describe('HCMComponent', () => {
  let component: HCMComponent;
  let fixture: ComponentFixture<HCMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HCMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HCMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

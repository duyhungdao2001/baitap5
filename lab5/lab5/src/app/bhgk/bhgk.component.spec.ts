import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhgkComponent } from './bhgk.component';

describe('BhgkComponent', () => {
  let component: BhgkComponent;
  let fixture: ComponentFixture<BhgkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhgkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhgkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

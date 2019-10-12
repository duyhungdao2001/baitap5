import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TtttComponent } from './tttt.component';

describe('TtttComponent', () => {
  let component: TtttComponent;
  let fixture: ComponentFixture<TtttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

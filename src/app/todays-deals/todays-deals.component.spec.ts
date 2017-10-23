import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysDealsComponent } from './todays-deals.component';

describe('TodaysDealsComponent', () => {
  let component: TodaysDealsComponent;
  let fixture: ComponentFixture<TodaysDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

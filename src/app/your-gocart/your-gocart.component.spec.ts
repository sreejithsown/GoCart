import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourGocartComponent } from './your-gocart.component';

describe('YourGocartComponent', () => {
  let component: YourGocartComponent;
  let fixture: ComponentFixture<YourGocartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourGocartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourGocartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

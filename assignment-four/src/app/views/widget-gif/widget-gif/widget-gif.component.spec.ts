import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetGifComponent } from './widget-gif.component';

describe('WidgetGifComponent', () => {
  let component: WidgetGifComponent;
  let fixture: ComponentFixture<WidgetGifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetGifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

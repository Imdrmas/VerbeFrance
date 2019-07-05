import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVolComponent } from './view-vol.component';

describe('ViewVolComponent', () => {
  let component: ViewVolComponent;
  let fixture: ComponentFixture<ViewVolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

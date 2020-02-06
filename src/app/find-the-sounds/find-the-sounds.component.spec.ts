import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTheSoundsComponent } from './find-the-sounds.component';

describe('FindTheSoundsComponent', () => {
  let component: FindTheSoundsComponent;
  let fixture: ComponentFixture<FindTheSoundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindTheSoundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTheSoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

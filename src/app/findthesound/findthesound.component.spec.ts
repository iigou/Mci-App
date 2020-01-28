import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTheSoundComponent } from './findthesound.component';

describe('FindthesoundComponent', () => {
  let component: FindTheSoundComponent;
  let fixture: ComponentFixture<FindTheSoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindTheSoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTheSoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

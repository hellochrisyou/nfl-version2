import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaComponent } from './nba.component';

describe('NbaComponent', () => {
  let component: NbaComponent;
  let fixture: ComponentFixture<NbaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NbaComponent]
    });
    fixture = TestBed.createComponent(NbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

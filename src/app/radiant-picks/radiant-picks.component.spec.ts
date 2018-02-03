import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiantPicksComponent } from './radiant-picks.component';

describe('RadiantPicksComponent', () => {
  let component: RadiantPicksComponent;
  let fixture: ComponentFixture<RadiantPicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiantPicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiantPicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

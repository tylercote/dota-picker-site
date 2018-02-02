import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirePicksComponent } from './dire-picks.component';

describe('DirePicksComponent', () => {
  let component: DirePicksComponent;
  let fixture: ComponentFixture<DirePicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirePicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirePicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

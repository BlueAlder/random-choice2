import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomSelectorComponent } from './random-selector.component';

describe('RandomSelectorComponent', () => {
  let component: RandomSelectorComponent;
  let fixture: ComponentFixture<RandomSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

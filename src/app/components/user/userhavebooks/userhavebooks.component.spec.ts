import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserhavebooksComponent } from './userhavebooks.component';

describe('UserhavebooksComponent', () => {
  let component: UserhavebooksComponent;
  let fixture: ComponentFixture<UserhavebooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserhavebooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserhavebooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

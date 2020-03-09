import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserwantbooksComponent } from './userwantbooks.component';

describe('UserwantbooksComponent', () => {
  let component: UserwantbooksComponent;
  let fixture: ComponentFixture<UserwantbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserwantbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserwantbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

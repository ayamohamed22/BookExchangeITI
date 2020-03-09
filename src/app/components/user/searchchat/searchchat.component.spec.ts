import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchchatComponent } from './searchchat.component';

describe('SearchchatComponent', () => {
  let component: SearchchatComponent;
  let fixture: ComponentFixture<SearchchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpageInfoComponent } from './mainpage-info.component';

describe('MainpageInfoComponent', () => {
  let component: MainpageInfoComponent;
  let fixture: ComponentFixture<MainpageInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainpageInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

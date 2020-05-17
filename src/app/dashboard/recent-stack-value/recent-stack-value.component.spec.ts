import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentStackValueComponent } from './recent-stack-value.component';

describe('RecentStackValueComponent', () => {
  let component: RecentStackValueComponent;
  let fixture: ComponentFixture<RecentStackValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentStackValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentStackValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

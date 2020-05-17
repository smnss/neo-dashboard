import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestHackerNewsComponent } from './latest-hacker-news.component';

describe('LatestHackerNewsComponent', () => {
  let component: LatestHackerNewsComponent;
  let fixture: ComponentFixture<LatestHackerNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestHackerNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestHackerNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

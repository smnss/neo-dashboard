import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHackerNewsComponent } from './top-hacker-news.component';

describe('TopHackerNewsComponent', () => {
  let component: TopHackerNewsComponent;
  let fixture: ComponentFixture<TopHackerNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopHackerNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHackerNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

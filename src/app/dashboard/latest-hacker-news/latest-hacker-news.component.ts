import { Component, OnInit } from '@angular/core';
import { CurdService } from 'src/app/curd.service';
import { takeUntil } from 'rxjs/operators';
import { DestroyAction } from 'src/app/destroyable-component';
import { Observable } from 'rxjs';
import { HackerNews } from 'src/app/interfaces/hacker-news.interface';

@Component({
  selector: 'app-latest-hacker-news',
  templateUrl: './latest-hacker-news.component.html',
  styleUrls: ['./latest-hacker-news.component.scss']
})
export class LatestHackerNewsComponent extends DestroyAction implements OnInit {
  latestNews: Observable<HackerNews[]>[];

  constructor(private curdService: CurdService) {
    super();
  }

  ngOnInit(): void {
    this.curdService.getLatestStories('askstories.json', 'pretty')
      .pipe(takeUntil(this.destroyableObservable)).subscribe(res => {
        this.latestNews = res;
      });
  }

}

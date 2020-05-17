import { Component, OnInit } from '@angular/core';
import { CurdService } from 'src/app/curd.service';
import { DestroyAction } from 'src/app/destroyable-component';
import { takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HackerNews } from 'src/app/interfaces/hacker-news.interface';

@Component({
  selector: 'app-top-hacker-news',
  templateUrl: './top-hacker-news.component.html',
  styleUrls: ['./top-hacker-news.component.scss']
})

export class TopHackerNewsComponent extends DestroyAction implements OnInit {
  topNew: Observable<HackerNews[]>[];

  constructor(private curdService: CurdService) {
    super();
  }

  ngOnInit(): void {
    this.curdService.getTopStories('topstories.json', 'pretty')
    .pipe(takeUntil(this.destroyableObservable)).subscribe(res => {
      this.topNew = res;
    });
  }

}

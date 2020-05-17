import { Component, OnInit } from '@angular/core';
import { DestroyAction } from 'src/app/destroyable-component';
import { CurdService } from 'src/app/curd.service';
import { takeUntil } from 'rxjs/operators';
import { RecentStack } from 'src/app/interfaces/recent-stack.interface';
import { ChartOptions, ChartInput } from 'src/app/interfaces/chart.interface';

@Component({
  selector: 'app-recent-stack-value',
  templateUrl: './recent-stack-value.component.html',
  styleUrls: ['./recent-stack-value.component.scss']
})
export class RecentStackValueComponent extends DestroyAction implements OnInit {
  public recentStackChart: ChartInput = {
    data: [],
    type: 'ColumnChart',
    options: null,
  };

  public options: ChartOptions = {
    title: 'Last 5 days stack value',
    hAxis: {
      title: 'Date',
      titleTextStyle: { color: '#778592' }
    },
    vAxis: {
      title: 'Dollars',
      titleTextStyle: { color: '#778592' }
    },
    legend: { position: 'none' },
    colors: ['#778592']
  };

  constructor(private curdService: CurdService) {
    super();
  }

  ngOnInit(): void {
    this.curdService.getHistoricalStocks('historical-price-full/AAPL', 5)
      .pipe(takeUntil(this.destroyableObservable)).subscribe((res: RecentStack) => {
        this.recentStackChart.data = res.historical.map(stack => {
          return [stack.date.toString(), Number(stack.high)];
        });
        this.recentStackChart.options = this.options;
      });
  }

}

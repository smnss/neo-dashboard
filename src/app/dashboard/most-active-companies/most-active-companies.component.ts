import { Component, OnInit } from '@angular/core';
import { DestroyAction } from 'src/app/destroyable-component';
import { CurdService } from 'src/app/curd.service';
import { takeUntil } from 'rxjs/operators';
import { MostActiveCompanies } from 'src/app/interfaces/most-active-companies';
import { ChartOptions, ChartInput } from 'src/app/interfaces/chart.interface';

@Component({
  selector: 'app-most-active-companies',
  templateUrl: './most-active-companies.component.html',
  styleUrls: ['./most-active-companies.component.scss']
})
export class MostActiveCompaniesComponent extends DestroyAction implements OnInit {
  public activeCompanyChart: ChartInput = {
    data: [],
    type: 'ColumnChart',
    options: null,
  };

  public options: ChartOptions = {
    title: 'Most Active 10 companies',
    hAxis: {
      title: 'Companies',
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
    this.curdService.getActiveStocks('stock/actives')
      .pipe(takeUntil(this.destroyableObservable)).subscribe((res: MostActiveCompanies) => {
        this.activeCompanyChart.data = res.mostActiveStock.map(company => {
          return [company.ticker, Number(company.price)];
        });
        this.activeCompanyChart.options = this.options;
      });
  }

}

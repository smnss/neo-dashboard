import { Component, OnInit } from '@angular/core';
import { CurdService } from 'src/app/curd.service';
import { DestroyAction } from 'src/app/destroyable-component';
import { takeUntil } from 'rxjs/internal/operators';
import { StockCompanies } from 'src/app/interfaces/stock-companies.interface';

@Component({
  selector: 'app-stock-companies',
  templateUrl: './stock-companies.component.html',
  styleUrls: ['./stock-companies.component.scss']
})
export class StockCompaniesComponent extends DestroyAction implements OnInit {
  public companies: StockCompanies;

  constructor(private curdService: CurdService) {
    super();
  }

  ngOnInit(): void {
    this.curdService.getStockList('company/stock/list')
      .pipe(takeUntil(this.destroyableObservable)).subscribe((res: any) => {
        this.companies = res.symbolsList;
      });
  }

}

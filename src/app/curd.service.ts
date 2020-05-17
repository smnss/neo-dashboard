import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HackerNews } from './interfaces/hacker-news.interface';
import { StockCompanies } from './interfaces/stock-companies.interface';
import { RecentStack } from './interfaces/recent-stack.interface';
import { MostActiveCompanies } from './interfaces/most-active-companies';

@Injectable({
  providedIn: 'root'
})
export class CurdService {

  //   https://financialmodelingprep.com/api/v3/company/stock/list

  // https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?timeseries=5

  // https://financialmodelingprep.com/api/v3/stock/actives

  // https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty

  // https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty

  // https://hacker-news.firebaseio.com/v0/item/22512265.json?print=pretty

  public readonly API_ENDPOINT: string = 'https://financialmodelingprep.com/api/v3/';
  public readonly API_HACKER_NEWS: string = 'https://hacker-news.firebaseio.com/v0/';

  constructor(private http: HttpClient) { }

  public getStockList(stockListUrl): Observable<StockCompanies> {
    const finalUrl = `${this.API_ENDPOINT}${stockListUrl}`;
    return this.get(finalUrl);
  }

  public getHistoricalStocks(historicalStocksUrl, count): Observable<RecentStack> {
    const headers: HttpHeaders = this.getHeader();
    let params = new HttpParams();
    params = params.append('timeseries', count);
    const finalUrl = `${this.API_ENDPOINT}${historicalStocksUrl}`;
    return this.get(finalUrl, { headers, params });
  }

  public getActiveStocks(activeStocksUrl): Observable<MostActiveCompanies> {
    const finalUrl = `${this.API_ENDPOINT}${activeStocksUrl}`;
    return this.get(finalUrl);
  }

  public getLatestStories(latestStoriesUrl, type): Observable<Observable<HackerNews[]>[]> {
    const headers: HttpHeaders = this.getHeader();
    let params = new HttpParams();
    params = params.append('print', type);
    const finalUrl = `${this.API_HACKER_NEWS}${latestStoriesUrl}`;
    return this.get(finalUrl, { headers, params }).pipe(map((response: any) => {
      const top10 = response.slice(0, 10);
      return top10.map(item => {
        return this.getStroiesInfo(item);
      });
    }));
  }

  public getTopStories(topStoriesUrl, type): Observable<Observable<HackerNews[]>[]> {
    const headers: HttpHeaders = this.getHeader();
    let params = new HttpParams();
    params = params.append('print', type);
    const finalUrl = `${this.API_HACKER_NEWS}${topStoriesUrl}`;
    return this.get(finalUrl, { headers, params }).pipe(map((response: any) => {
      const top10 = response.slice(0, 10);
      return top10.map(item => {
        return this.getStroiesInfo(item);
      });
    }));
  }

  public getStroiesInfo(id): Observable<HackerNews> {
    const headers: HttpHeaders = this.getHeader();
    let params = new HttpParams();
    params = params.append('print', 'pretty');
    const finalUrl = `${this.API_HACKER_NEWS}item/${id}.json`;
    return this.get(finalUrl, { headers, params });
  }


  public get(url: string, options?: any): any {
    return this.http.get(url, options).
      pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }

  private getHeader(): HttpHeaders {
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Authorization', ``);
    return headers;
  }

}

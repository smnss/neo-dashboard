import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StockCompaniesComponent } from './dashboard/stock-companies/stock-companies.component';
import { LatestHackerNewsComponent } from './dashboard/latest-hacker-news/latest-hacker-news.component';
import { TopHackerNewsComponent } from './dashboard/top-hacker-news/top-hacker-news.component';
import { MostActiveCompaniesComponent } from './dashboard/most-active-companies/most-active-companies.component';
import { RecentStackValueComponent } from './dashboard/recent-stack-value/recent-stack-value.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StockCompaniesComponent,
    LatestHackerNewsComponent,
    TopHackerNewsComponent,
    MostActiveCompaniesComponent,
    RecentStackValueComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

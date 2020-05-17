import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCompaniesComponent } from './stock-companies.component';

describe('StockCompaniesComponent', () => {
  let component: StockCompaniesComponent;
  let fixture: ComponentFixture<StockCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

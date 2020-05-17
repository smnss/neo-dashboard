import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostActiveCompaniesComponent } from './most-active-companies.component';

describe('MostActiveCompaniesComponent', () => {
  let component: MostActiveCompaniesComponent;
  let fixture: ComponentFixture<MostActiveCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostActiveCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostActiveCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

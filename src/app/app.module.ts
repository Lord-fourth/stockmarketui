import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExcelfileuploadComponent } from './excelfileupload/excelfileupload.component';
import { StockpriceComponent } from './stockprice/stockprice.component';
import { CompareCompanyComponent } from './compare-company/compare-company.component';

@NgModule({
  declarations: [
    AppComponent,
    ExcelfileuploadComponent,
    StockpriceComponent,
    CompareCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

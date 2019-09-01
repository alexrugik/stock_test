import { NgModule } from '@angular/core';
import { AppDependenciesModule } from '@app/app.dependencies';
import { DashboardComponent } from '@app/pages/dashboard/dashboard.component';
import { StockListComponent } from '@app/pages/dashboard/stock-list/stock-list.component';
import { StockComponent } from '@app/pages/dashboard/stock/stock.component';
import { StockChartComponent } from './stock-chart/stock-chart.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    AppDependenciesModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    StockComponent,
    StockListComponent,
    StockChartComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {
}

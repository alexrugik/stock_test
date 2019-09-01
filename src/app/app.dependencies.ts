import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular-highcharts';

const DEPENDENCIES = [
  // angular dependencies
  CommonModule,
  HttpClientModule,

  // 3rd party
  ChartModule
];

@NgModule({
  exports: [
    ...DEPENDENCIES
  ]
})
export class AppDependenciesModule {
}

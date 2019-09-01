import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Chart } from 'angular-highcharts';

const CHART_CONFIG = {
  chart: {
    type: 'datetime',
    height: 100,
    width: 150,
  },
  legend: {
    enabled: false
  },
  yAxis: {
    visible: false,
  },
  xAxis: {
    visible: false,
  },
  title: {
    text: ''
  },
  credits: {
    enabled: false
  }
};

@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockChartComponent implements OnInit {
  @Input() chartData;
  public chart: Chart = new Chart(CHART_CONFIG);

  constructor() {
  }

  ngOnInit() {
    this.chart.addSeries(
      {
        type: 'area',
        name: '',
        data: this.chartData
      },
      true,
      false
    );
  }

}

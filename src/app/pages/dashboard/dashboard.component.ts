import {
  Component
} from '@angular/core';

import {
  StockList
} from '@app/pages/dashboard/stock.api';

const SELECTED_STOCK_LIST_CONFIG: StockList = [
  {name: 'SPDR S&P 500 ETF', symbol: 'SPY'},
  {name: 'Dow Inc.', symbol: 'DOW'},
  {name: 'Nasdaq Inc.', symbol: 'NDAQ'},
  {name: 'Amazon.com Inc.', symbol: 'AMZN'},
  {name: 'Alphabet Inc.', symbol: 'GOOG'}
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public stockListConfig: StockList = SELECTED_STOCK_LIST_CONFIG;
}

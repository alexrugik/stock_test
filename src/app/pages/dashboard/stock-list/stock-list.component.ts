import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import {
  Stock,
  StockApi,
  StockList
} from '@app/pages/dashboard/stock.api';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    StockApi
  ]
})
export class StockListComponent {
  @Input() stockListConfig: StockList;

  trackByFn(index, item: Stock) {
    return item.symbol;
  }
}

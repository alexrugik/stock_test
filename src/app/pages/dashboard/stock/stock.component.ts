import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  TimeSeriesData,
  TimeSeriesResponse,
  Stock,
  StockApi,
  GlobalQuoteResponse,
  GlobalQuoteData
} from '@app/pages/dashboard/stock.api';
import { catchError, map } from 'rxjs/operators';
import { forkJoin, Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  @Input() stockConfig: Stock;
  public loading = false;

  constructor(private readonly cd: ChangeDetectorRef,
              private readonly stockApi: StockApi) {
  }

  ngOnInit() {
    const interval = '60min';
    this.updateStockConfigWithNewData(this.stockConfig.symbol, interval);
  }

  updateStockConfigWithNewData(symbol: string, interval: string) {
    this.loading = true;
    const globalQuoteRequest: Observable<GlobalQuoteResponse> = this.stockApi.getGlobalQuoteData(symbol);
    const timeSeriesRequest: Observable<TimeSeriesResponse> = this.stockApi.getIntradayTimeSeries(symbol);
    forkJoin([globalQuoteRequest, timeSeriesRequest])
      .pipe(
        map(([globalQuoteResponse, timeSeriesResponse]) => {
          // if no request for key handle with next:
          if (globalQuoteResponse.Note || timeSeriesResponse.Note) {
            throw new Error('no Permitted requests!');
          }
          return [globalQuoteResponse['Global Quote'], timeSeriesResponse[`Time Series (${interval})`]];
        }),
        catchError(err => {
          return throwError(err);
        }),
      )
      .subscribe(
        ([globalQuoteData, timeSeriesData]) => {
          this.stockConfig = Object.assign(
            {},
            this.stockConfig,
            {
              history: this.convertDataToHistory(timeSeriesData),
              trends: (globalQuoteData as GlobalQuoteData)['10. change percent'],
              currentValue: (globalQuoteData as GlobalQuoteData) ['05. price']
            });
          this.loading = false;
          this.cd.detectChanges();
        },
        (errorResponse) => {
          console.warn(errorResponse);
          this.loading = false;
          this.cd.detectChanges();
        }
      );
  }

  convertDataToHistory(response: TimeSeriesData): Array<any[]> {
    return Object
      .entries(response)
      .map(([item, data]) => [item, +data['1. open']]);
  }
}

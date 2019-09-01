import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TimeSeriesMetaData {
  Information: string;
  Symbol: string;
  Interval: string;
  'Last Refreshed': string;
  'Output Size': string;
  'Time Zone': string;
}

export interface TimeSeriesData extends Object {
}

export interface TimeSeriesResponse {
  'Meta Data': TimeSeriesMetaData;

  [key: string]: TimeSeriesData;

  // it means error in response
  Note?: string;
}

export interface GlobalQuoteData {
  '01. symbol': string;
  '05. price': string;
  '10. change percent': string
}

export interface GlobalQuoteResponse {
  'Global Quote': GlobalQuoteData;
  // it means error in response
  Note?: string;
}

export interface Stock {
  name: string;
  symbol: string;
  currentValue?: string;
  trends?: string;
  history?: Array<string[]>
}

export interface StockList extends Array<Stock> {
}

@Injectable()
export class StockApi {
  private readonly baseUrl = 'https://www.alphavantage.co/query';

  constructor(private readonly http: HttpClient) {
  }

  getIntradayTimeSeries(symbol: string, interval: string = '60min'): Observable<TimeSeriesResponse> {
    const url: string = this.baseUrl;
    return this.http.get<TimeSeriesResponse>(url, {
      params: {
        function: 'TIME_SERIES_INTRADAY',
        symbol,
        interval
      }
    });
  }

  getGlobalQuoteData(symbol: string): Observable<GlobalQuoteResponse> {
    const url: string = this.baseUrl;
    return this.http.get<GlobalQuoteResponse>(url, {
      params: {
        function: 'GLOBAL_QUOTE',
        symbol
      }
    });
  }
}

import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ChartData } from './chart.interface';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor(private readonly httpClient: HttpClient) {}

  get(): Observable<ChartData> {
    return this.httpClient.get<ChartData>('@api/charts').pipe(
      tap((res: ChartData) => {
        return res;
      })
    );
  }
}

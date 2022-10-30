import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MetricOutputs } from './sample.data';

@Injectable()
export class DataService {

  constructor() { }

  generateMetricViews(): Observable<any> {
    console.log('called');
    return of(MetricOutputs);
  }
}
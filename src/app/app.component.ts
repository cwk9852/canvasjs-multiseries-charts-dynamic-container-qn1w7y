import { Component } from '@angular/core';

import { DataService } from './shared/data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  showViews: boolean;
  selectedMetrices = ['Monthly', 'Yearly'];
  metricOutputs = [];

  constructor(private dataService: DataService) {
    this.showViews = false;
  }

  generateViews() {
    this.dataService.generateMetricViews().subscribe(metrices => this.metricOutputs = metrices);
    this.showViews = true;
  }
}

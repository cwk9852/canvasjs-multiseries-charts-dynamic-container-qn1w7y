import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit, OnChanges {
  @Input() metricesResults: any;
  charts = [];
  @Input() selectedMetrices: any;
  _selectedMetrices: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const selectedMetrices: SimpleChange = changes.selectedMetrices;
    this._selectedMetrices = selectedMetrices.currentValue;
    console.log(this._selectedMetrices);
  }

  ngOnInit() {  }
  
  ngAfterViewInit() {
    this.metricesResults.forEach(metric => {
      const temp = new CanvasJS.Chart(metric.graphId, {
        animationEnabled: true,
        backgroundColor: 'transparent',
        exportEnabled: true,
        theme: 'theme2',
        legend: {
          cursor: 'pointer',
          itemclick: this.toggleDataSeries
        },
        data: metric.data
      });
      this.charts.push(temp);
    });
    this.charts.forEach(chart => chart.render());
  }

  toggleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    e.chart.render();
  }
}
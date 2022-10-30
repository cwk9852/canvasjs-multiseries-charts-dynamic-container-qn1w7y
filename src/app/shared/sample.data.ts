export const MetricOutputs = [
  {
    'graphId': 'monthly-chart',
    'graphTitle': 'Monthly Graph',
    'data': [{
      type: 'column',
      name: 'Cases Open',
      color: '#003D79',
      showInLegend: true,
      dataPoints: [
        { label: '2018-02', y: 16 },
        { label: '2018-03', y: 19 },
        { label: '2018-04', y: 24 },
        { label: '2018-05', y: 13 },
        { label: '2018-06', y: 19 }
      ]
    },
    {
      type: 'column',
      name: 'Cases Closed',
      color: '#6DDBEB',
      showInLegend: true,
      dataPoints: [
        { label: '2018-02', y: 16 },
        { label: '2018-03', y: 21 },
        { label: '2018-04', y: 24 },
        { label: '2018-05', y: 19 },
        { label: '2018-06', y: 13 }
      ]
    },
    {
      type: 'line',
      name: 'Backlogs',
      color: '#CD3517',
      showInLegend: true,
      dataPoints: [
        { label: '2018-02', y: 6 },
        { label: '2018-03', y: 6 },
        { label: '2018-04', y: 7 },
        { label: '2018-05', y: 9 },
        { label: '2018-06', y: 9 }
      ]
    }
    ]
  },
  {
    graphId: 'quarterly-chart',
    graphTitle: 'Quarterly Graph',
    data: [{
      type: 'column',
      name: 'Cases Open',
      color: '#003D79',
      showInLegend: true,
      dataPoints: [
        { label: 'Q1 2019', y: 18 },
        { label: 'Q2 2019', y: 27 },
        { label: 'Q3 2019', y: 14 },
        { label: 'Q4 2019', y: 13 },
        { label: 'Q1 2020', y: 6 }
      ]
    }, {
      type: 'column',
      name: 'Cases Closed',
      color: '#6DDBEB',
      showInLegend: true,
      dataPoints: [
        { label: 'Q1 2019', y: 14 },
        { label: 'Q2 2019', y: 22 },
        { label: 'Q3 2019', y: 13 },
        { label: 'Q4 2019', y: 3 },
        { label: 'Q1 2020', y: 20 }
      ]
    }, {
      type: 'line',
      name: 'Backlogs',
      color: '#CD3517',
      showInLegend: true,
      dataPoints: [
        { label: 'Q1 2019', y: 10 },
        { label: 'Q2 2019', y: 12 },
        { label: 'Q3 2019', y: 15 },
        { label: 'Q4 2019', y: 17 },
        { label: 'Q1 2020', y: 18 }
      ]
    }]
  },
  {
    'graphId': 'yearly-chart',
    'graphTitle': 'Yearly Graph',
    'data': [{
      type: 'column',
      name: 'Cases Opened',
      color: '#003D79',
      showInLegend: true,
      dataPoints: [
        { label: '2017', y: 527 },
        { label: '2018', y: 418 },
        { label: '2019', y: 338 }
      ]
    }, {
      type: 'column',
      name: 'Cases Closed',
      color: '#6DDBEB',
      showInLegend: true,
      dataPoints: [
        { label: '2017', y: 554 },
        { label: '2018', y: 291 },
        { label: '2019', y: 272 }
      ]
    }, {
      type: 'line',
      name: 'Backlog',
      color: '#CD3517',
      showInLegend: true,
      dataPoints: [
        { label: '2017', y: 225 },
        { label: '2018', y: 100 },
        { label: '2019', y: 130 }
      ]
    }]
  }
];
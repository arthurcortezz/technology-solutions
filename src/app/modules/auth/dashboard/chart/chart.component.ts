import { Chart, registerables } from 'chart.js';
import {
  Input,
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

import { ChartData } from './chart.interface';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('userChart') userChartRef!: ElementRef;
  chart!: Chart;

  @Input() data!: ChartData;

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    const ctx = this.userChartRef.nativeElement.getContext('2d');

    this.chart = new Chart(ctx, {
      type: this.data.type,
      data: {
        labels: this.data.labels,
        datasets: [
          {
            label: this.data.title,
            data: [10, 50, 30],
            backgroundColor: ['#4CAF50', '#2196F3', '#FFC107'],
            borderColor: ['#388E3C', '#1976D2', '#FFA000'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}

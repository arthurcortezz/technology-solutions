export interface ChartData {
  type: 'bar' | 'line' | 'pie' | 'doughnut';
  title: string;
  labels: string[];
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
}

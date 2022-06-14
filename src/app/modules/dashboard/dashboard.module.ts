import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgxEchartsModule } from 'ngx-echarts';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzStatisticModule,
    NzGridModule,
    NzIconModule,
    HighchartsChartModule,
    NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
  ],
})
export class DashboardModule {}

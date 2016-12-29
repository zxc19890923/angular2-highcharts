1. 安装angular2-highcharts
cd到需要安装插件的目录下，运行 npm install angular2-highcharts

2. app.module.ts文件中引入
import {ChartModule} from "angular2-highcharts";

3. app.component.ts中定义数据
import {Component, OnInit} from "@angular/core";
@Component({
  selector: "my-app",
  templateUrl: "./app.html"
})
export class AppComponent {
  options: Object;
  constructor() {
  
  }
  ngOnInit() {
    this.options = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Browser market shares at a specific website, 2014'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: 'Brands',
        data: [
          { name: 'Microsoft Internet Explorer', y: 56.33 },
          { name: 'Chrome', y: 24.03 },
          { name: 'Firefox', y: 10.38 },
          { name: 'Safari', y: 4.77 },
          { name: 'Opera', y: 0.91 },
          { name: 'Proprietary or Undetectable', y: 0.2 }
        ]
      }]
    }
  }
}

4. app.html模板中引入标签
<chart [options]="options"></chart>

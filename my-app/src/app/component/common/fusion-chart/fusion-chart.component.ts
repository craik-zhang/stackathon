import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fusion-chart',
  templateUrl: './fusion-chart.component.html',
  styleUrls: ['./fusion-chart.component.css']
})

export class FusionChartComponent implements OnInit {
  dataSource1: Object;
  dataSource2: Object;
  title: string;
  constructor() {
    //STEP 2 - Chart Data
    const chartData1 = [
      {
        label: "Jan 19",
        value: "290"
      },
      {
        label: "Feb 19",
        value: "260"
      },
      {
        label: "Mar 19",
        value: "180"
      },
      {
        label: "Apr 19",
        value: "140"
      },
      {
        label: "May 19",
        value: "115"
      }
    ];
    const chartData2 = [
      {
        label: "Jan 19",
        value: "100"
      },
      {
        label: "Feb 19",
        value: "200"
      },
      {
        label: "Mar 19",
        value: "150"
      },
      {
        label: "Apr 19",
        value: "170"
      },
      {
        label: "May 19",
        value: "110"
      }
    ];
    // STEP 3 - Chart Configuration
    const dataSource1 = {
      chart: {
        //Set the chart caption
        caption: "Sector One",
        //Set the chart subcaption
        subCaption: "Sector Stock Price",
        //Set the x-axis name
        xAxisName: "Time in Months",
        //Set the y-axis name
        yAxisName: "Sector Stock Price",
        numberSuffix: "K",
        //Set the theme for your chart
        theme: "fusion"
      },
      // Chart Data - from step 2
      data: chartData1
    };
    const dataSource2 = {
      chart: {
        //Set the chart caption
        caption: "Sector Two",
        //Set the chart subcaption
        subCaption: "Sector Stock Price",
        //Set the x-axis name
        xAxisName: "Time in Months",
        //Set the y-axis name
        yAxisName: "Sector Stock Price",
        numberSuffix: "K",
        //Set the theme for your chart
        theme: "fusion"
      },
      // Chart Data - from step 2
      data: chartData2
    };
    this.dataSource1 = dataSource1;
    this.dataSource2 = dataSource2;
    this.title = "Compare Sectors"
  }

  ngOnInit(): void {
  }

}

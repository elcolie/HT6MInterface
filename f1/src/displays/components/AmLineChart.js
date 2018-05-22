import React, {Component} from 'react';
import 'amcharts3';
import 'amcharts3/amcharts/serial';
import AmCharts from '@amcharts/amcharts3-react';
import {rawData} from "./rawData";

// Generate random data
function generateData() {
  let firstDate = new Date();
  
  let dataProvider = [];
  
  for (let i = 0; i < 100; ++i) {
    let date = new Date(firstDate.getTime());
    date.setTime(i + 0.01);
    
    dataProvider.push({
      date: date,
      value: Math.floor(Math.random() * 100)
    });
  }
  
  return dataProvider;
}


let toAmLineChart = (item) => {
  /*
  *
  * Convert item to [date, value]
  * item is [int, int]
  *
  * */
  let dataProvider = [];
  let firstDate = new Date(); // Since it is reuquired by AmChart
  
  item.forEach((element) => {
    dataProvider.push({
      date: firstDate.setTime(element[0]),
      value: element[1]
    })
  });
  
  return dataProvider;
};

let myLabelFunc = (item) => {
  console.log("Rise the Flag");
  console.log(item);
  return item;
};

// Component which contains the dynamic state for the chart
class AmLineChart extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      dataProvider: toAmLineChart(rawData()),
      timer: null
    };
    console.log('Sieg Heil');
    console.log(this.state.dataProvider);
  }
  
  render() {
    const config = {
      "type": "serial",
      "theme": "light",
      "marginRight": 40,
      "marginLeft": 40,
      "autoMarginOffset": 20,
      "mouseWheelZoomEnabled": true,
      "valueAxes": [{
        "id": "v1",
        "axisAlpha": 0,
        "position": "left",
        "ignoreAxisWidth": true
      }],
      "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
      },
      "graphs": [{
        "id": "g1",
        "balloon": {
          "drop": true,
          "adjustBorderColor": false,
          "color": "#ffffff"
        },
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "value",
        "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
      }],
      "chartScrollbar": {
        "graph": "g1",
        "oppositeAxis": false,
        "offset": 30,
        "scrollbarHeight": 80,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount": true,
        "color": "#AAAAAA"
      },
      "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha": 1,
        "cursorColor": "#258cbb",
        "limitToGraph": "g1",
        "valueLineAlpha": 0.2,
        "valueZoomable": true
      },
      "valueScrollbar": {
        "oppositeAxis": false,
        "offset": 50,
        "scrollbarHeight": 10
      },
      "categoryField": "date",
      "categoryAxis": {
        "labelFunction": myLabelFunc,
        "parseDates": true,
        "dashLength": 1,
        "equalSpacing": true,
        "minorGridEnabled": true
      },
      "dataProvider": this.state.dataProvider
    };
    
    return (
      <div className="AmLineChart">
        <AmCharts.React style={{width: "100%", height: "500px"}} options={config}/>
      </div>
    );
  }
}

export default AmLineChart;

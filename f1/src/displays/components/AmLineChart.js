import React, {Component} from 'react';
import 'amcharts3';
import 'amcharts3/amcharts/serial';
import AmCharts from '@amcharts/amcharts3-react';
import {rawData} from "./rawData";


let milliSecondXaxis = (item) => {
  return (parseFloat(item) * 1000).toFixed(2).toString();
};

let toAmLineChart = (item) => {
  /*
  *
  * Convert item to [date, value]
  * item is [int, int]
  *
  * */
  let dataProvider = [];
  
  item.forEach((element) => {
    dataProvider.push({
      time: element[0],
      value: element[1]
    })
  });
  
  return dataProvider;
};


// Component which contains the dynamic state for the chart
class AmLineChart extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      dataProvider: toAmLineChart(rawData()),
      timer: null
    };
  }
  
  render() {
    const config2 = {
      "type": "serial",
      "theme": "light",
      "marginRight": 80,
      "autoMarginOffset": 20,
      "marginTop": 7,
      "dataProvider": toAmLineChart(rawData()),
      "valueAxes": [{
        "axisAlpha": 0.2,
        "dashLength": 1,
        "position": "left"
      }],
      "mouseWheelZoomEnabled": true,
      "graphs": [{
        "id": "g1",
        "balloonText": "[[value]]",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "hideBulletsCount": 50,
        "title": "red line",
        "valueField": "visits",
        "useLineColorForBulletBorder": true,
        "balloon":{
          "drop":true
        }
      }],
      "chartScrollbar": {
        "autoGridCount": true,
        "graph": "g1",
        "scrollbarHeight": 40
      },
      "chartCursor": {
        "limitToGraph":"g1"
      },
      "categoryField": "date",
      "categoryAxis": {
        "parseDates": true,
        "axisColor": "#DADADA",
        "dashLength": 1,
        "minorGridEnabled": true
      },
      "export": {
        "enabled": true
      }
    };
    
    
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
      "categoryField": "time",
      "categoryAxis": {
        "labelFunction": milliSecondXaxis,
        "labelRotation": 30,
        "dashLength": 1,
        "equalSpacing": true,
        "minorGridEnabled": true
      },
      "export": {
        "enabled": true,
      },
      "dataProvider": this.state.dataProvider
    };
    
    return (
      <div id='myAmChart' className="AmLineChart">
        <AmCharts.React style={{width: "100%", height: "500px"}} options={config}/>
      </div>
    );
  }
}

export default AmLineChart;

import React, {Component} from 'react';
import 'amcharts3';
import 'amcharts3/amcharts/serial';
import {connect} from 'react-redux';
import {ON_START_CHART} from "../../constants";
import DumpChart from "./dumpChart";

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
	}

	//TODO: Change hard-code scenario_id from 2 to `variable`
	componentDidMount() {
		this.props.onStart(2);
	}

	render() {
		console.log('start buck');
		console.log(this.props.chartReducer === undefined);
		console.log(this.props.chartReducer);
		return (
				DumpChart(this.props.chartReducer)
		)
	}
}

const onStart = (scenario_id) => {
	return {
		type: ON_START_CHART,
		payload: scenario_id
	}
};

const mapStateToProps = (newProps, ownProps) => {
	return newProps
};

export default connect(mapStateToProps, {onStart})(AmLineChart);

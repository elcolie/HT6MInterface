import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import {PAGE_SIZE, SUBMIT_PAGE_CHANGED} from "../../constants";
import animationLoader from './ajax-loader.gif';
import {Button} from 'semantic-ui-react';
import {Tips} from "../utils";

class TINTQueue extends Component {
	constructor() {
		super();
	}

	enterLogic(values) {
		const {data, page, pages, loading} = values;
		if (pages === -1) {
			/*
			* Let it spin with couple of blink and then SIEG HEIL!
			* */
			this.props.onPageChange(1);
			return (
					<div>
						<br/>
						<br/>
						<img className='loading' src={animationLoader} alt={"spinner"}/>
					</div>
			);
		}
		return (
				<div>
					<ReactTable
							data={data}
							pages={pages}
							loading={loading}
							defaultPageSize={20}
							columns={[
								{
									Header: 'Job ID',
									accessor: 'task_id'
								},
								{
									Header: 'Owner',
									accessor: 'owner'
								},
								{
									Header: 'Status',
									accessor: 'status'
								},
								{
									Header: 'Input File',
									id: 'inputFile',
									accessor: d => d.input_file.file
								},
								{
									Header: 'Case ID',
									accessor: 'case_issue_id'
								}
							]}
							className="-striped -highlight"
					/>
					<br/>
					<br/>
					<Tips/>

				</div>
		)
	}

	render() {
		// Read from reducer
		if (this.props.queue) {
			return this.enterLogic(this.props.queueReducer);
		} else {
			return null;
		}
	}
}

const onPageChange = (pageIndex) => {
	return {
		type: SUBMIT_PAGE_CHANGED,
		payload: {
			pageIndex
		}
	}
};

const mapStateToProps = (newState = {}, ownProps) => {
	return newState;
};

export default connect(mapStateToProps, {onPageChange})(TINTQueue);
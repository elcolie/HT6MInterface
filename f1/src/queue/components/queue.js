import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import {makeData, Tips} from "../utils";
import {PAGE_SIZE, SUBMIT_PAGE_CHANGED} from "../../constants";

class TINTQueue extends Component {
	constructor() {
		super();
		this.state = {
			data: makeData(),
		}
	}

	render() {
		// Read from reducer
		if (this.props.queue) {
			const {data, pages, loading} = this.props.queueReducer;

			return (
					<div>
						<ReactTable
								loading={loading}
								data={data}
								pages={pages % PAGE_SIZE}
								pageSize={PAGE_SIZE}
								page={0}
								onPageChange={(pageIndex) => {
									//Let it trigger the action and re-render the component again
									this.props.onPageChange(pageIndex);
								}}
								onFetchData={(state, instance) => {
									this.setState({loading: true})
									this.props.onPageChange(1)
								}}
								showPageSizeOptions={false}
								columns={[
									{
										Header: "Task ID",
										accessor: 'task_id'
									},
									{
										Header: "Owner",
										accessor: 'owner'
									},
									{
										Header: "Status",
										accessor: 'status',
									},
									{
										Header: "Case Issue",
										accessor: 'case_issue_id'
									}
								]}
								defaultPageSize={10}
								className="-striped -highlight"
						/>
						<br/>
						<Tips/>
						<br/>
						<br/>
					</div>
			)
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
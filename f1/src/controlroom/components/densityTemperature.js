import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Input, Table} from 'semantic-ui-react';
import {SPECIE_CHANGE_DT} from "../../constants";

class DensityTemperatureContainer extends Component {

	render() {
		const {
			props: {
				specieReducer: {nsmax}
			}
		} = this.props;
		this.key = 'densityOfEdge';
		return (
				<Table.Row>
					<Table.Cell>Density of the edge</Table.Cell>
					<Table.Cell>
						<Input type='number' name={'electronDensityEdge'} placeholder={0.00} onChange={(event) => {
							this.props.specieChangeDT('electron', this.key, Number(event.target.value));
						}}/>
					</Table.Cell>

					<Table.Cell>
						<Input type='number' name={'hydrogenDensityEdge'} placeholder={0.00} onChange={(event) => {
							this.props.specieChangeDT('hydrogen', this.key, Number(event.target.value));
						}}/>
					</Table.Cell>

					<Table.Cell>
						<Input disabled={nsmax < 3} type='number' name={'deuteriumDensityEdge'} placeholder={0.00}
									 onChange={(event) => {
										 this.props.specieChangeDT('deuterium', this.key, Number(event.target.value));
									 }}/>
					</Table.Cell>

					<Table.Cell>
						<Input disabled={nsmax < 4} type='number' name={'TritiumDensityEdge'} placeholder={0.00}
									 onChange={(event) => {
										 this.props.specieChangeDT('tritium', this.key, Number(event.target.value));
									 }}/>
					</Table.Cell>
				</Table.Row>
		)
	}
}

const specieChangeDT = (specie, key, value) => {
	return {
		type: SPECIE_CHANGE_DT,
		payload: {
			specie,
			key,
			value
		}
	}
};

const mapStateToProps = (newProps, currProps) => {
	return newProps;
};


export default connect(mapStateToProps, {specieChangeDT})(DensityTemperatureContainer);

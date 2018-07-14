import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Input, Table} from 'semantic-ui-react';
import {SPECIE_CHANGE_DT} from "../../constants";

class DensityCenterRow extends Component {
	render() {
		const {
			props: {
				specieReducer: {nsmax}
			}
		} = this.props;
		this.key = 'densityOfCenter';

		return (
				<Table.Row>
					<Table.Cell>Density of the center</Table.Cell>
					<Table.Cell>
						<Input type='number' name={'electronDensityCenter'} placeholder={'0.00'} onChange={(event) => {
							this.props.specieChangeDT('electron', this.key, event.target.value);
							console.log(this.props);
						}}/>
					</Table.Cell>

					<Table.Cell>
						<Input type='number' name={'hydrogenDensityCenter'} placeholder={'0.00'}/>
					</Table.Cell>

					<Table.Cell>
						<Input disabled={nsmax < 3} type='number' name={'deuteriumDensityCenter'} placeholder={'0.00'}/>
					</Table.Cell>

					<Table.Cell>
						<Input disabled={nsmax < 4} type='number' name={'tritiumDensityCenter'} placeholder={'0.00'}/>
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
	return {...newProps};
};

export default connect(mapStateToProps, {specieChangeDT})(DensityCenterRow);

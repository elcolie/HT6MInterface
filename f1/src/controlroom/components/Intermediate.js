import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import SetPlasmaParameter from "./setPlasmaParameters";

class Intermediate extends Component {
	render() {
		return (
				<Fragment>
					{/*<SetMachineParameter/>*/}
					<SetPlasmaParameter/>
					{/*<SetTransportParameter/>*/}
					{/*<ControlParameter/>*/}
					{/*<Confirmation/>*/}
				</Fragment>
		)
	}
}

const mapStateToProps = (newProps, currProps) => {
	return newProps;
};

export default connect(mapStateToProps, {})(Intermediate);


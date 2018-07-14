import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import SetPlasmaParameter from "./setPlasmaParameters";
import SetMachineParameter from "./setMachineParameters";
import SetTransportParameter from "./setTransportParameters";
import ControlParameter from "./controlParamsForm";
import Confirmation from "./comfirm";

class Intermediate extends Component {
	render() {
		return (
				<Fragment>
					<SetMachineParameter/>
					<SetPlasmaParameter/>
					<SetTransportParameter/>
					<ControlParameter/>
					<Confirmation/>
				</Fragment>
		)
	}
}

const mapStateToProps = (newProps, currProps) => {
	return newProps;
};

export default connect(mapStateToProps, {})(Intermediate);


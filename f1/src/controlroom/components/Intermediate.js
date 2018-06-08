import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import setMachineParameter from "./setMachineParameters";
import SetPlasmaParameter from "./setPlasmaParameters";
import SetTransportParameter from "./setTransportParameters";
import ControlParameter from "./setControlParameters";
import ParticleAndHeatSources from "./setParticleAndHeatSources";

class Intermediate extends Component {
  handleSubmit = (event, payload) => {
    console.log(`handleSubmit`);
    console.log(this.state);  //I will emit `action` here
    this.props.submitMachineParams(this.state);
  };
  
  render() {
    return (
      <Fragment>
        {/*I will uncommet it later*/}
        {/*{setMachineParameter()}*/}
        {/*______________________________________________*/}
        {/*<SetPlasmaParameter/>*/}
        {/*<SetTransportParameter/>*/}
        <ControlParameter/>
        {/*<ParticleAndHeatSources/>*/}
      
      </Fragment>
    
    )
  }
}

const submitMachineParams = (data) => {
  //Just change the state and scroll down to next component
  return null;
  // return {
  //   type: SUBMIT_INTERMEIATE_FORM,
  //   payload: data
  // }
};

const mapStateToProps = (newProps, ownProps) => {
  return newProps;
};

export default connect(mapStateToProps, {submitMachineParams})(Intermediate);


import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import { Form, Input } from 'semantic-ui-react'
import {MACHINE_OPTIONS, MACHINE_OPTIONS_DEFAULT} from "../../constants";
import setMachineParameter from "./setMachineParameters";
import SetPlasmaParameter from "./setPlasmaParameters";

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
        {setMachineParameter()}
        ______________________________________________
        <SetPlasmaParameter/>

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


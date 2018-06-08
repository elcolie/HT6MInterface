import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import ControlParameterForm from "./controlParamsForm";




class ControlParameter extends Component {
  render() {
    return (
      <Fragment>
        <h1 id={'control-params'}>Step 4/5: Set control parameters</h1>
        
        <ControlParameterForm/>

        <a href="#transport-params" className="btn btn-info" role="button">Back</a>
        <a href="#set-particle-and-heatsources-params" className="btn btn-info" role="button">Next</a>
      </Fragment>
    );
  }
}

const mapStateToProps = (newProps, ownProps) => {
  return newProps;
};


export default connect(mapStateToProps, {})(ControlParameter);

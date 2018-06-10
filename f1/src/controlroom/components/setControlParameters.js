import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import ControlParameterForm from "./controlParamsForm";


class ControlParameter extends Component {
  render() {
    return (
      <Fragment>
        <h1 id={'control-params'}>Step 4/5: Set control parameters</h1>
        
        <ControlParameterForm/>
        
      </Fragment>
    );
  }
}

const mapStateToProps = (newProps, ownProps) => {
  return newProps;
};


export default connect(mapStateToProps, {})(ControlParameter);

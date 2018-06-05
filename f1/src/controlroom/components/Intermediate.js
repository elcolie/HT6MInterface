import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

class Intermediate extends Component {
  handleSubmit = (event, payload) => {
    console.log(`handleSubmit`);
    console.log(this.state);  //I will emit `action` here
    this.props.submitIntermediateForm(this.state);
  };
  
  render() {
    return (
      <Fragment>
        <h1>Step 1/5: Set machine's parameters</h1>
        <img src={'mach_params.png'} className={'intermediate-image'}/>
      
      </Fragment>
    )
  }
}

const submitIntermediateForm = (data) => {
  return {
    type: SUBMIT_INTERMEIATE_FORM,
    payload: data
  }
};

const mapStateToProps = (newProps, ownProps) => {
  return newProps;
};

export default connect(mapStateToProps, {submitIntermediateForm})(Intermediate);

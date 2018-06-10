import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Form} from 'semantic-ui-react';

import {
  MAXIMUM_RUNTIME_CHANGED,
  MAXIMUM_RUNTIME_DEFAULT,
  MAXIMUM_RUNTIME_OPTIONS,
  NUMBER_OF_BREAK_POINTS_CHANGED,
  NUMBER_OF_TIME_BREAK_POINTS_DEFAULT,
  NUMBER_OF_TIME_BREAK_POINTS_OPTIONS
} from "../../constants";
import SimpleStep from "./simpleStep";
import ParticleAndHeatSources from "./setParticleAndHeatSources";


class ControlParameterForm extends Component {
  
  render() {
    console.log(`render`);
    console.log(this.props);
    return (
      <Fragment>
        
        <SimpleStep controlParametersReducer={this.props.controlParametersReducer}/>
        
        <Form>
          <Form.Group inline>
            <label>Number of time break points</label>
            <Form.Select name='numberOfTimeBreakpoints' fluid options={NUMBER_OF_TIME_BREAK_POINTS_OPTIONS}
                         placeholder={NUMBER_OF_TIME_BREAK_POINTS_DEFAULT} onChange={(event, value) => {
              this.props.onChangeNumberOfBreakPoints(value);  //No idea why dispatch already but I have to set state again
              this.setState({
                numberOfBreakPoints: value
              });
            }}/>
          </Form.Group>
          <Form.Group inline>
            <label>Maximum run time (s)</label>
            <Form.Select name='maximumRunTime' fluid options={MAXIMUM_RUNTIME_OPTIONS}
                         placeholder={MAXIMUM_RUNTIME_DEFAULT} onChange={(event, value) => {
              this.props.onChangeMaximumRunTime(value); //Same reason as above. It might be a Semantic way
              this.setState({
                maximumRunTime: value
              })
            }}/>
          </Form.Group>
        </Form>
  
        <a href="#transport-params" className="btn btn-info" role="button">Back</a>
        <a href="#set-particle-and-heatsources-params" className="btn btn-info" role="button">Next</a>
  
        <ParticleAndHeatSources controlParametersReducer={this.props.controlParametersReducer}/>
        
        
      </Fragment>
    )
  }
}

const onChangeNumberOfBreakPoints = (value) => {
  return {
    type: NUMBER_OF_BREAK_POINTS_CHANGED,
    payload: value
  }
};

const onChangeMaximumRunTime = (value) => {
  return {
    type: MAXIMUM_RUNTIME_CHANGED,
    payload: value
  }
};


const mapStateToProps = (newProps, ownProps) => {
  return newProps;
};


export default connect(
  mapStateToProps,
  {onChangeNumberOfBreakPoints, onChangeMaximumRunTime})
(
  ControlParameterForm
);

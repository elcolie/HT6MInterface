import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Form} from 'semantic-ui-react';
import {Steps} from 'antd';
import {
  MAXIMUM_RUNTIME_CHANGED,
  MAXIMUM_RUNTIME_DEFAULT,
  MAXIMUM_RUNTIME_OPTIONS,
  NUMBER_OF_BREAK_POINTS_CHANGED,
  NUMBER_OF_TIME_BREAK_POINTS_DEFAULT,
  NUMBER_OF_TIME_BREAK_POINTS_OPTIONS
} from "../../constants";
import SimpleStep from "./simpleStep";

const Step = Steps.Step;

const dumpParticleAndHeatSources = (props) => {
  const {steps, state} = props;
  return (
    <div className="steps-content">{steps[state.current].content}</div>
  )
};

class ControlParameterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }
  
  clickBreakPoint(index) {
    this.setState({current: index});
  }
  
  render() {
    console.log(this.props);
    const {current} = this.state;
    const {steps} = this.props.controlParametersReducer;
    return (
      <Fragment>
        
        <SimpleStep controlParametersReducer={this.props.controlParametersReducer}/>
        
        <Form>
          <Form.Group inline>
            <label>Number of time break points</label>
            <Form.Select name='numberOfTimeBreakpoints' fluid options={NUMBER_OF_TIME_BREAK_POINTS_OPTIONS}
                         placeholder={NUMBER_OF_TIME_BREAK_POINTS_DEFAULT} onChange={(event, value) => {
              this.props.onChangeNumberOfBreakPoints(value);  //No idea why dispatch already but I have to set state again
              this.clickBreakPoint(0);  //Reset it to zero otherwise `undefined` by index out bound
            }}/>
          </Form.Group>
          <Form.Group inline>
            <label>Maximum run time (s)</label>
            <Form.Select name='maximumRunTime' fluid options={MAXIMUM_RUNTIME_OPTIONS}
                         placeholder={MAXIMUM_RUNTIME_DEFAULT} onChange={(event, value) => {
              this.props.onChangeMaximumRunTime(value); //Same reason as above. It might be a Semantic way
            }}/>
          </Form.Group>
        </Form>
        
        <a href="#transport-params" className="btn btn-info" role="button">Back</a>
        <a href="#set-particle-and-heatsources-params" className="btn btn-info" role="button">Next</a>
        
        <h1 id={'set-particle-and-heatsources-params'}>
          Step 5/5: Set particle and heat sources at each time break
          points
        </h1>
        
        <div>
          <Steps current={current}>
            {steps.map((item, index) => <Step key={index} onClick={() => {
              this.clickBreakPoint(index);
            }}/>)}
          </Steps>
        </div>
        {dumpParticleAndHeatSources({steps, state: this.state})}
      
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

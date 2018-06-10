import React, {Component, Fragment} from 'react';
import {Steps} from 'antd';
import {connect} from 'react-redux';
import ParticleHeatForm from "./particleHeatForm";
import {stringifyNumber} from "../../utils";
import {setBreakPointList} from "../utils";

const Step = Steps.Step;

const dumpParticleAndHeatSources = (props) =>{
  const {steps, state} = props;
  console.log(props);
  return (
    <div className="steps-content">{steps[state.current].content}</div>
  )
};

class ParticleAndHeatSources extends Component {
  //This is child component of Step 4/5: Because it follow its props
  
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
    const {numberOfBreakPoints} = this.props.controlParametersReducer;
    
    this.steps = setBreakPointList(numberOfBreakPoints);
    console.log(this.steps);
  }
  
  clickBreakPoint(index) {
    this.setState({current: index});
  }
  
  render() {
    const {current} = this.state;
    
    return (
      <Fragment>
        <h1 id={'set-particle-and-heatsources-params'}>
          Step 5/5: Set particle and heat sources at each time break
          points
        </h1>
        
        <div>
          <Steps current={current}>
            {this.steps.map((item, index) => <Step key={index} onClick={() => {
              this.clickBreakPoint(index);
            }}/>)}
          </Steps>
        </div>
        {dumpParticleAndHeatSources({steps: this.steps, state: this.state})}
      </Fragment>
    )
  }
};

const mapStateToProps = (newProps, ownProps) => {
  return newProps;
};


export default connect(mapStateToProps, {})(ParticleAndHeatSources);

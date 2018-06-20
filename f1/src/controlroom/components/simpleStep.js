import React, {Component, Fragment} from 'react';
import {Steps} from 'antd';

const Step = Steps.Step;

class SimpleStep extends Component {
  
  getInsideSteps(numberOfBreakPoints, maximumRunTime) {
    let arrayList = [];
    
    for (let i = 0; i < numberOfBreakPoints; i++) {
      if (i === 0) {
        arrayList.push(
          <Step key={i} title={'Start'}/>
        )
      }
      else if (i === numberOfBreakPoints - 1) {
        arrayList.push(
          <Step key={i} title={maximumRunTime} description={'Time'}/>
        )
      }
      else {
        arrayList.push(
          <Step key={i}/>
        )
      }
    }
    return arrayList;
  }
  
  render() {
    const {maximumRunTime, numberOfBreakPoints} = this.props.controlParametersReducer;
    
    return (
      <Fragment>
        <Steps current={numberOfBreakPoints - 1} status={"finish"}>
          {this.getInsideSteps(numberOfBreakPoints, maximumRunTime)}
        </Steps>
      </Fragment>
    )
  }
}

export default SimpleStep;

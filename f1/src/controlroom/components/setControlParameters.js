import React, {Component, Fragment} from 'react';
import breakPoint from './breakpoints.png';
import {Form} from 'semantic-ui-react';
import {
  MAXIMUM_RUNTIME_DEFAULT, MAXIMUM_RUNTIME_OPTIONS,
  NUMBER_OF_TIME_BREAK_POINTS_DEFAULT,
  NUMBER_OF_TIME_BREAK_POINTS_OPTIONS,
  TRANSPORT_OPTIONS,
  TRANSPORT_OPTIONS_DEFAULT
} from "../../constants";

class ControlParameter extends Component {
  render() {
    return (
      <Fragment>
        <h1 id={'control-params'}>Step 4/5: Set control parameters</h1>
        <img className={'intermediate-image'} src={breakPoint} alt={'5 break point within 3 seconds'}/>
        <Form>
          <Form.Group inline>
            <label>Number of time break points</label>
            <Form.Select name='numberOfTimeBreakpoints' fluid options={NUMBER_OF_TIME_BREAK_POINTS_OPTIONS}
                         placeholder={NUMBER_OF_TIME_BREAK_POINTS_DEFAULT}/>
          </Form.Group>
          <Form.Group inline>
            <label>Maximum run time (s)</label>
            <Form.Select name='maximumRunTime' fluid options={MAXIMUM_RUNTIME_OPTIONS}
                         placeholder={MAXIMUM_RUNTIME_DEFAULT}/>
          </Form.Group>
        </Form>
        <a href="#transport-params" className="btn btn-info" role="button">Back</a>
        <a href="#set-particle-and-heatsources-params" className="btn btn-info" role="button">Next</a>
      </Fragment>
    );
  }
}

export default ControlParameter;

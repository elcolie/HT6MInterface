import React, {Component, Fragment} from 'react';
import { Form, Input } from 'semantic-ui-react'
import {connect} from 'react-redux';
import {MACHINE_OPTIONS, MACHINE_OPTIONS_DEFAULT} from "../../constants";

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
        <Form onSubmit={this.handleSubmit}>
          <Form.Group inline>
            <label>Machine</label>
            <Form.Select name='machineOption' onChange={this.handleChange} fluid options={MACHINE_OPTIONS}
                         placeholder={MACHINE_OPTIONS_DEFAULT}/>
          </Form.Group>
          <Form.Group inline>
            <Form.Field>
              <label>Major radius (m)</label>
              <Input name='majorRadius' placeholder='(0.65)' />
            </Form.Field>
          </Form.Group>
  
          <Form.Group inline>
            <Form.Field>
              <label>Minor radius (m)</label>
              <Input name='minorRadius' placeholder='(0.20)' />
            </Form.Field>
          </Form.Group>
  
          <Form.Group inline>
            <Form.Field>
              <label>Triangularity</label>
              <Input name='triangularity' placeholder='(0.0)' />
            </Form.Field>
          </Form.Group>
  
          <Form.Group inline>
            <Form.Field>
              <label>Ellipticity</label>
              <Input name='ellipticity' placeholder='(1.0)' />
            </Form.Field>
          </Form.Group>
  
          <Form.Group inline>
            <Form.Field>
              <label>Plasma current (MA)</label>
              <Input name='plasmaCurrent' placeholder='(0.65)' />
            </Form.Field>
          </Form.Group>
          
          <Form.Group inline>
            <Form.Field>
              <label>Magnetic field (T)</label>
              <Input name='magneticField' placeholder='(1.50)' />
            </Form.Field>
          </Form.Group>
          <Form.Button content={'Next'}/>
        </Form>
        
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


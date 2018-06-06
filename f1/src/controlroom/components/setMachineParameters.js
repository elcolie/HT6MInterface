import React from 'react';
import {Form, Input} from 'semantic-ui-react';
import {MACHINE_OPTIONS, MACHINE_OPTIONS_DEFAULT} from "../../constants";

const setMachineParameter = () => {
  return (
    <div>
      <h1 id={'machine-params'}>Step 1/5: Set machine's parameters</h1>
      <img src={'mach-params.png'} className={'intermediate-image'}/>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group inline>
          <label>Machine</label>
          <Form.Select name='machineOption' onChange={this.handleChange} fluid options={MACHINE_OPTIONS}
                       placeholder={MACHINE_OPTIONS_DEFAULT}/>
        </Form.Group>
        <Form.Group inline>
          <Form.Field>
            <label>Major radius (m)</label>
            <Input name='majorRadius' placeholder='(0.65)'/>
          </Form.Field>
        </Form.Group>
        
        <Form.Group inline>
          <Form.Field>
            <label>Minor radius (m)</label>
            <Input name='minorRadius' placeholder='(0.20)'/>
          </Form.Field>
        </Form.Group>
        
        <Form.Group inline>
          <Form.Field>
            <label>Triangularity</label>
            <Input name='triangularity' placeholder='(0.0)'/>
          </Form.Field>
        </Form.Group>
        
        <Form.Group inline>
          <Form.Field>
            <label>Ellipticity</label>
            <Input name='ellipticity' placeholder='(1.0)'/>
          </Form.Field>
        </Form.Group>
        
        <Form.Group inline>
          <Form.Field>
            <label>Plasma current (MA)</label>
            <Input name='plasmaCurrent' placeholder='(0.65)'/>
          </Form.Field>
        </Form.Group>
        
        <Form.Group inline>
          <Form.Field>
            <label>Magnetic field (T)</label>
            <Input name='magneticField' placeholder='(1.50)'/>
          </Form.Field>
        </Form.Group>
      </Form>
      <a href="#plasma-params" className="btn btn-info" role="button">Next</a>
    </div>
  )
};

export default setMachineParameter;

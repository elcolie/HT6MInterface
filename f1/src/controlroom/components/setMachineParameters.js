import React from 'react';
import {Form, Input} from 'semantic-ui-react';
import {MACHINE_OPTIONS, MACHINE_OPTIONS_DEFAULT} from "../../constants";
import machParams from './mach-params.png';

const setMachineParameter = () => {
  return (
    <div>
      <h1 id={'machine-params'}>Step 1/5: Set machine's parameters</h1>
      
      <span id='img-form'>
        <img src={machParams} className={'intermediate-image'} alt={'set machine parameters'}/>
        <Form id='basic-form' onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td><b>Machine</b></td>
                <td><Form.Select name='machine' onChange={this.handleChange} fluid options={MACHINE_OPTIONS}
                                 placeholder={MACHINE_OPTIONS_DEFAULT}/></td>
              </tr>
              <tr>
                <td><b>Major radius (m)</b></td>
                <td><Input name='majorRadius' placeholder='(0.65)'/></td>
              </tr>
              <tr>
                <td><b>Minor radius (m)</b></td>
                <td><Input name='minorRadius' placeholder='(0.20)'/></td>
              </tr>
              <tr>
                <td><b>Triangularity</b></td>
                <td><Input name='triangularity' placeholder='(0.0)'/></td>
              </tr>
              <tr>
                <td><b>Ellipticity</b></td>
                <td><Input name='ellipticity' placeholder='(1.0)'/></td>
              </tr>
              <tr>
                <td><b>Plasma current (MA)</b></td>
                <td><Input name='plasmaCurrent' placeholder='(0.65)'/></td>
              </tr>
              <tr>
                <td><b>Magnetic field (T)</b></td>
                <td><Input name='magneticField' placeholder='(1.50)'/></td>
              </tr>
              <tr>
                <td><a href="#plasma-params" className="btn btn-info" role="button">Next</a></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </Form>
      </span>
      
    </div>
  )
};

export default setMachineParameter;

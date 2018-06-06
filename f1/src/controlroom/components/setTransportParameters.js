import React, {Component, Fragment} from 'react';
import transportParams from './Simple_Torus.png';
import {Form} from 'semantic-ui-react';
import {
  MACHINE_OPTIONS,
  MACHINE_OPTIONS_DEFAULT, RESISTIVITY_OPTIONS,
  RESISTIVITY_OPTIONS_DEFAULT,
  TRANSPORT_OPTIONS,
  TRANSPORT_OPTIONS_DEFAULT
} from "../../constants";

class SetTransportParameter extends Component {
  render(){
    return(
      <Fragment>
        <h1 id={'transport-params'}>Step 3/5: Set transport parameters</h1>
        <img src={transportParams} className={'intermediate-image'} alt={'Transport Parameters'}/>
        
        <div>
          <fieldset id='login-fieldset'>
            <legend id='transport-legend'>Transport models</legend>
            <Form>
              <Form.Group inline>
                <label>Transport model</label>
                <Form.Select name='transportModel' fluid options={TRANSPORT_OPTIONS}
                             placeholder={TRANSPORT_OPTIONS_DEFAULT}/>
              </Form.Group>
              
              <Form.Group inline>
                <label>Resistivity model</label>
                <Form.Select name='resistivityModel' fluid options={RESISTIVITY_OPTIONS}
                             placeholder={RESISTIVITY_OPTIONS_DEFAULT}/>
              </Form.Group>
              
            </Form>
            
          </fieldset>
          
          
        </div>
        
        
      </Fragment>
    )
  }
}

export default SetTransportParameter;

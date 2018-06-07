import React, {Component, Fragment} from 'react';
import transportParams from './Simple_Torus.png';
import {Form} from 'semantic-ui-react';
import {
  BOOTSTRAP_CURRENT_DEFAULT, BOOTSTRAP_CURRENT_MODEL_OPTIONS,
  HEAT_PINCH_MODEL_DEFAULT,
  HEAT_PINCH_MODEL_OPTIONS,
  NEOCLASSICAL_MODEL_DEFAULT,
  NEOCLASSICAL_MODEL_OPTIONS,
  PARTICLE_DIFFUSION_MODEL_DEFAULT,
  PARTICLE_DIFFUSION_MODEL_OPTIONS,
  RESISTIVITY_OPTIONS,
  RESISTIVITY_OPTIONS_DEFAULT,
  TRANSPORT_OPTIONS,
  TRANSPORT_OPTIONS_DEFAULT
} from "../../constants";

class SetTransportParameter extends Component {
  render() {
    return (
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
              
              <Form.Group inline>
                <label>Particle diffusion model</label>
                <Form.Select name='particleDiffusionModel' fluid options={PARTICLE_DIFFUSION_MODEL_OPTIONS}
                             placeholder={PARTICLE_DIFFUSION_MODEL_DEFAULT}/>
              </Form.Group>
              
              <Form.Group inline>
                <label>Heat pinch model</label>
                <Form.Select name='heatPinchModel' fluid options={HEAT_PINCH_MODEL_OPTIONS}
                             placeholder={HEAT_PINCH_MODEL_DEFAULT}/>
              </Form.Group>
              <Form.Group inline>
                <label>Bootstrap current model</label>
                <Form.Select name='bootstrapCurrentModel' fluid options={BOOTSTRAP_CURRENT_MODEL_OPTIONS}
                             placeholder={BOOTSTRAP_CURRENT_DEFAULT}/>
              </Form.Group>
              <Form.Group inline>
                <label>Neoclassical model</label>
                <Form.Select name='neoclassicalModel' fluid options={NEOCLASSICAL_MODEL_OPTIONS}
                             placeholder={NEOCLASSICAL_MODEL_DEFAULT}/>
              </Form.Group>
            </Form>
            <a href="#plasma-params" className="btn btn-info" role="button">Back</a>
            <a href="#control-params" className="btn btn-info" role="button">Next</a>
          </fieldset>
        
        </div>
      </Fragment>
    )
  }
}

export default SetTransportParameter;

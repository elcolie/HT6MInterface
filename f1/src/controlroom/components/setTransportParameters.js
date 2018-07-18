import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import transportParams from './Simple_Torus.png';
import {Form} from 'semantic-ui-react';
import {
	BOOTSTRAP_CURRENT_DEFAULT,
	BOOTSTRAP_CURRENT_MODEL_OPTIONS,
	CHANGE_TRANSPORT_PARAM,
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
					<span id="img-form">
          <img src={transportParams} className={'intermediate-image donut'} alt={'Transport Parameters'}/>
          <fieldset id='login-fieldset' className='transport-fieldset'>
            <legend id='transport-legend'>Transport models</legend>
            <Form>
              <table>
                <tbody>
                  <tr>
                    <td><b>Transport model</b></td>
                    <td><Form.Select
												name='transportModel'
												fluid
												options={TRANSPORT_OPTIONS}
												placeholder={TRANSPORT_OPTIONS_DEFAULT}
												onChange={(event, {value}) => {
													this.props.changeParam('transportModel', value);
												}}/></td>
                  </tr>
                  <tr>
                    <td><b>Resistivity model</b></td>
                    <td><Form.Select
												name='resistivityModel'
												fluid
												options={RESISTIVITY_OPTIONS}
												placeholder={RESISTIVITY_OPTIONS_DEFAULT}
												onChange={(event, {value}) => {
													this.props.changeParam('resistivityModel', value);
												}}/></td>
                  </tr>
                  <tr>
                    <td><b>Particle diffusion model</b></td>
                    <td><Form.Select
												name='particleDiffusionModel' fluid options={PARTICLE_DIFFUSION_MODEL_OPTIONS}
												placeholder={PARTICLE_DIFFUSION_MODEL_DEFAULT}
												onChange={(event, {value}) => {
													this.props.changeParam('particleDiffusionModel', value);
												}}/></td>
                  </tr>
                  <tr>
                    <td><b>Heat pinch model</b></td>
                    <td><Form.Select
												name='heatPinchModel' fluid options={HEAT_PINCH_MODEL_OPTIONS}
												placeholder={HEAT_PINCH_MODEL_DEFAULT}
												onChange={(event, {value}) => {
													this.props.changeParam('heatPinchModel', value);
												}}/></td>
                  </tr>
                  <tr>
                    <td><b>Bootstrap current model</b></td>
                    <td><Form.Select
												name='bootstrapCurrentModel' fluid options={BOOTSTRAP_CURRENT_MODEL_OPTIONS}
												placeholder={BOOTSTRAP_CURRENT_DEFAULT}
												onChange={(event, {value}) => {
													this.props.changeParam('bootstrapCurrentModel', value);
												}}/></td>
                  </tr>
									<tr>
										<td><b>Neoclassical model</b></td>
										<td>
											<Form.Select
													name='neoClassicalModel' fluid options={NEOCLASSICAL_MODEL_OPTIONS}
													placeholder={NEOCLASSICAL_MODEL_DEFAULT}
													onChange={(event, {value}) => {
														this.props.changeParam('neoClassicalModel', value);
													}}
											/>
										</td>
									</tr>

                </tbody>
              </table>
            </Form>
            <div className='back-next-button'>
              <a href="#plasma-params" className="btn btn-info" role="button">Back</a>
              <a href="#control-params" className="btn btn-info next-button-margin" role="button">Next</a>
            </div>
          </fieldset>
        
        </span>
				</Fragment>
		)
	}
}

const mapStateToProps = (newProps, ownProps) => {
	return newProps
};

const changeParam = (key, value) => {
	return {
		type: CHANGE_TRANSPORT_PARAM,
		payload: {
			key,
			value
		}
	}
};

export default connect(mapStateToProps, {changeParam})(SetTransportParameter);

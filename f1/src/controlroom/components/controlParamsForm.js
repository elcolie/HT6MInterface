import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Form} from 'semantic-ui-react'
import {Steps} from 'antd';
import {
	MAXIMUM_RUNTIME_CHANGED,
	MAXIMUM_RUNTIME_DEFAULT,
	MAXIMUM_RUNTIME_OPTIONS,
	NUMBER_OF_BREAK_POINTS_CHANGED,
	NUMBER_OF_TIME_BREAK_POINTS_DEFAULT,
	NUMBER_OF_TIME_BREAK_POINTS_OPTIONS,
	SET_PHSS
} from "../../constants";
import SimpleStep from "./simpleStep";
import ParticleHeatForm from "./particleHeatForm";

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
		const {current} = this.state;
		const {steps} = this.props.controlParametersReducer;
		return (
				<Fragment>

					<SimpleStep controlParametersReducer={this.props.controlParametersReducer}/>

					<Form className='justify-center'>
						<table>
							<tbody>
							<tr>
								<td className='test'><b>Number of time break points</b></td>
								<td><Form.Select id='control-dropdown' name='numberOfTimeBreakpoints' fluid
																 options={NUMBER_OF_TIME_BREAK_POINTS_OPTIONS}
																 placeholder={NUMBER_OF_TIME_BREAK_POINTS_DEFAULT} onChange={(event, value) => {
									this.props.onChangeNumberOfBreakPoints(value);  //No idea why dispatch already but I have to set state again
									this.clickBreakPoint(0);  //Reset it to zero otherwise `undefined` by index out bound
									this.props.setParticleAndHeatSource(value);
								}}/></td>
							</tr>
							<tr>
								<td className='padding-right'><b>Maximum run time (s)</b></td>
								<td><Form.Select id='control-dropdown' name='maximumRunTime' fluid options={MAXIMUM_RUNTIME_OPTIONS}
																 placeholder={MAXIMUM_RUNTIME_DEFAULT} onChange={(event, value) => {
									this.props.onChangeMaximumRunTime(value); //Same reason as above. It might be a Semantic way
								}}/></td>
							</tr>
							</tbody>
						</table>
					</Form>

					<div id='back-next-text-center' className='back-next-button'>
						<a href="#transport-params" className="btn btn-info" role="button">Back</a>
						<a href="#set-particle-and-heatsources-params" id='back-next-button-spacing' className="btn btn-info"
							 role="button">Next</a>
					</div>

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
						<br/>
						<br/>
					</div>
					<ParticleHeatForm
							breakPointNumber={this.state.current + 1}
							data={this.props.particleAndHeatSources[this.state.current]}
					/>
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

const setParticleAndHeatSource = (value) => {
	return {
		type: SET_PHSS,
		payload: value
	}
};

const mapStateToProps = (newProps, ownProps) => {
	return newProps;
};


export default connect(
		mapStateToProps,
		{
			onChangeNumberOfBreakPoints,
			onChangeMaximumRunTime,
			setParticleAndHeatSource
		})(ControlParameterForm);

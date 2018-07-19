import React, {Component, Fragment} from 'react';
import {Form, Grid} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {PARTICLE_HEATSOURCE_DEFAULT, SPECIES, UPDATE_PHS} from "../../constants";


class ParticleHeatForm extends Component {

	render() {
		let {data} = this.props;
		if (data === undefined) {
			data = Object.assign({}, PARTICLE_HEATSOURCE_DEFAULT);
		}
		return <Fragment>
			<Grid textAlign='left' centered>
				<Grid equal={'true'}>
					<Grid.Row columns={2}>
						<Grid.Column width={8} textAlign='left'>
							<label>Break point number</label>
						</Grid.Column>
						<Grid.Column width={2}>
							<label>{this.props.breakPointNumber}</label>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row columns={2}>
						<Grid.Column width={8} textAlign='left' verticalAlign='middle'>
							<label>Time at this break point</label>
						</Grid.Column>
						<Grid.Column width={4}>
							<div className="ui right labeled input">
								<Form.Input
												type={'number'}
												placeholder={data.timeAtBreakPoint}
												onChange={(event, value) => {
													this.props.changeValue({
														key: 'timeAtBreakPoint',
														// value: Number(event.target.value), It just a new value not reflex the actual field's value
														value: Number(event.target.value),
														breakPointNumber: this.props.breakPointNumber - 1 //Use original index
													})
												}}
								/>
								<div className="ui basic label">
									ms
								</div>
							</div>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row columns={2}>
						<Grid.Column width={8} textAlign='left' verticalAlign='middle'>
							<label>Time step</label>
						</Grid.Column>
						<Grid.Column width={4}>
							<div className="ui right labeled input">
								<Form.Input
												type={'number'}
												placeholder={data.timeAtBreakPoint}
												onChange={(event, value) => {
													this.props.changeValue({
														key: 'timeStep',
														value: Number(event.target.value),
														breakPointNumber: this.props.breakPointNumber - 1 //Use original index
													})
												}}
								/>
								<div className="ui basic label">
									ms
								</div>
							</div>
						</Grid.Column>
					</Grid.Row>

				</Grid>
				<Grid.Row columns={2}>
					<Grid.Column>
						<fieldset id='login-fieldset'>
							<legend id='login-legend'>Particle Source</legend>
							<Form>
								<Form.Group inline>
									<label>Ion species of the source</label>
									<Form.Select fluid options={SPECIES} placeholder='Hydrogen'
															 onChange={(event, {value}) => {
																 this.props.changeValue({
																	 key: 'ionSpeciesOfTheSource',
																	 value: value,
																	 breakPointNumber: this.props.breakPointNumber - 1
																 })
															 }}/>
								</Form.Group>

								<Form.Group inline>
									<label>{'Rate of particle source'}</label>
									<div className="ui right labeled input">
										<Form.Input
												type={'number'}
												placeholder={data.rateOfParticleSource}
												onChange={(event, value) => {
													this.props.changeValue({
														key: 'rateOfParticleSource',
														value: Number(event.target.value),
														breakPointNumber: this.props.breakPointNumber - 1 //Use original index
													})
												}
												}
										/>
										<div className="ui basic label">{'ms'}</div>
									</div>
								</Form.Group>

								<Form.Group inline>
									<label>{'Radial position'}</label>
									<div className="ui right labeled input">
										<Form.Input
												type="number"
												placeholder={data.radialPosition}
												onChange={(event, value) => {
													this.props.changeValue({
														key: 'radialPosition',
														value: Number(event.target.value),
														breakPointNumber: this.props.breakPointNumber - 1 //Use original index
													})
												}}
										/>
										<div className="ui basic label">{'m'}</div>
									</div>
								</Form.Group>

								<Form.Group inline>
									<label>{"Radial width"}</label>
									<div className="ui right labeled input">
										<Form.Input
												type="number"
												placeholder={data.radialWidth}
												onChange={(event, value) => {
													this.props.changeValue({
														key: 'radialWidth',
														value: Number(event.target.value),
														breakPointNumber: this.props.breakPointNumber - 1 //Use original index
													})
												}}
										/>
										<div className="ui basic label">{'m'}</div>
									</div>
								</Form.Group>

							</Form>
						</fieldset>
					</Grid.Column>
					<Grid.Column>
						<fieldset id='login-fieldset'>
							<legend id='login-legend'>Heat Source</legend>
							<Form>

								<Form.Group inline>
									<label>NBI total power</label>
									<div className="ui right labeled input">
										<Form.Input
												type="number"
												placeholder={data.nbiTotalPower}
												onChange={(event, value) => {
													this.props.changeValue({
														key: 'nbiTotalPower',
														value: Number(event.target.value),
														breakPointNumber: this.props.breakPointNumber - 1 //Use original index
													})
												}}
										/>
										<div className="ui basic label">{'W'}</div>
									</div>
								</Form.Group>

								<Form.Group inline>
									<label>NBI radial position</label>
									<div className="ui right labeled input">
										<Form.Input
												type="number"
												placeholder={data.nbiRadialPosition}
												onChange={(event, value) => {
													this.props.changeValue({
														key: 'nbiRadialPosition',
														value: Number(event.target.value),
														breakPointNumber: this.props.breakPointNumber - 1 //Use original index
													})
												}}
										/>
										<div className="ui basic label">{'m'}</div>
									</div>
								</Form.Group>

								<Form.Group inline>
									<label>NBI radial width</label>
									<div className="ui right labeled input">
										<Form.Input
												type="number"
												placeholder={data.nbiRadialWidth}
												onChange={(event, value) => {
													this.props.changeValue({
														key: 'nbiRadialWidth',
														value: Number(event.target.value),
														breakPointNumber: this.props.breakPointNumber - 1 //Use original index
													})
												}}
										/>
										<div className="ui basic label">{'m'}</div>
									</div>
								</Form.Group>

								<Form.Group inline>
									<label>ICRF total power</label>
									<div className="ui right labeled input">
										<Form.Input
												type="number"
												placeholder={data.icrfTotalPower}
												onChange={(event, value) => {
													this.props.changeValue({
														key: 'icrfTotalPower',
														value: Number(event.target.value),
														breakPointNumber: this.props.breakPointNumber - 1 //Use original index
													})
												}}
										/>
										<div className="ui basic label">{'W'}</div>
									</div>
								</Form.Group>

								<Form.Group inline>
									<label>ICRF radial position</label>
									<div className="ui right labeled input">
										<Form.Input
												type="number"
												placeholder={data.icrfRadialPosition}
												onChange={(event, value) => {
													this.props.changeValue({
														key: 'icrfRadialPosition',
														value: Number(event.target.value),
														breakPointNumber: this.props.breakPointNumber - 1 //Use original index
													})
												}}
										/>
										<div className="ui basic label">{'m'}</div>
									</div>
								</Form.Group>

								<Form.Group inline>
									<label>ICRF radial width</label>
									<div className="ui right labeled input">
										<Form.Input
												type="number"
												placeholder={data.icrfRadialWidth}
												onChange={(event, value) => {
													this.props.changeValue({
														key: 'icrfRadialWidth',
														value: Number(event.target.value),
														breakPointNumber: this.props.breakPointNumber - 1 //Use original index
													})
												}}
										/>
										<div className="ui basic label">{'m'}</div>
									</div>
								</Form.Group>

							</Form>
						</fieldset>
					</Grid.Column>
				</Grid.Row>

			</Grid>

			<a href="#control-params" className="btn btn-info" role="button">Back</a>
			<a href="#confirmation" className="btn btn-info" role="button">Next</a>

		</Fragment>
	}
}

const changeValue = ({key, value, breakPointNumber}) => {
	return {
		type: UPDATE_PHS,
		payload: {
			key,
			value,
			breakPointNumber
		}
	}
};

const mapStateToProps = (newProps, ownProps) => {
	return {
		particleAndHeatSources: newProps.particleAndHeatSources
	}
};


export default connect(mapStateToProps, {changeValue})(ParticleHeatForm);

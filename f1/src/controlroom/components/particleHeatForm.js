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
				<Grid equal>
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
								<input type="number" placeholder={data.timeAtBreakPoint}
											 ref={node => {
												 this.input = node;
											 }}
											 onChange={() => {
												 this.props.changeValue({
													 key: 'timeAtBreakPoint',
													 value: Number(this.input.value),
													 breakPointNumber: this.props.breakPointNumber - 1 //Use original index
												 });
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
									onChange={(event, value)=>{
										this.props.changeValue({
											key: 'ionSpeciesOfTheSource',
											value: value.value,
											breakPointNumber: this.props.breakPointNumber - 1
										})
									}}/>
								</Form.Group>

								<Form.Group inline>
									<label>{'Rate of particle source'}</label>
									<div className="ui right labeled input">
										<input
												type="number"
												placeholder={data.rateOfParticleSource}
												ref={node => {this.input = node;}}
												onChange={()=>{
													this.props.changeValue({
														key: 'rateOfParticleSource',
														value: Number(this.input.value),
														breakPointNumber: this.props.breakPointNumber - 1 //Use original index
													})}
												}
										/>
										<div className="ui basic label">
											{'ms'}
										</div>
									</div>
								</Form.Group>

								<Form.Group inline>
									<label>{'Radial position'}</label>
									<div className="ui right labeled input">
										<input
												type="number"
												placeholder={data.radialPosition}
												ref={node => {this.input = node;}}
												onChange={()=>{
													this.props.changeValue({
														key: 'radialPosition',
														value: Number(this.input.value),
														breakPointNumber: this.props.breakPointNumber - 1 //Use original index
													})
												}}
										/>
										<div className="ui basic label">{'m'}</div>
									</div>
								</Form.Group>

								{/*{dumpParticleHeatForm({*/}
									{/*label: "Radial position",*/}
									{/*placeholder: data.radialPosition,*/}
									{/*unit: 'm',*/}
									{/*breakPointNumber: this.props.breakPointNumber -1,*/}
									{/*varName: 'radialPosition',*/}
									{/*changeValue: this.props.changeValue*/}
									{/*})*/}
								{/*}*/}
								{/*{dumpParticleHeatForm({label: "Radial width", placeholder: data.radialWidth, unit: 'm'})}*/}

							</Form>
						</fieldset>
					</Grid.Column>
					<Grid.Column>
						<fieldset id='login-fieldset'>
							<legend id='login-legend'>Heat Source</legend>
							<Form>

								{/*{dumpParticleHeatForm({label: "NBI total power", placeholder: data.nbiTotalPower, unit: 'W'})}*/}
								{/*{dumpParticleHeatForm({*/}
									{/*label: "NBI radial position",*/}
									{/*placeholder: data.nbiRadialPosition,*/}
									{/*unit: 'm'*/}
								{/*})}*/}
								{/*{dumpParticleHeatForm({label: "NBI radial width", placeholder: data.nbiRadialWidth, unit: 'm'})}*/}

								{/*{dumpParticleHeatForm({label: "ICRF total power", placeholder: data.icrfTotalPower, unit: 'W'})}*/}
								{/*{dumpParticleHeatForm({*/}
									{/*label: "ICRF radial position",*/}
									{/*placeholder: data.icrfRadialPosition,*/}
									{/*unit: 'm'*/}
								{/*})}*/}
								{/*{dumpParticleHeatForm({label: "ICRF radial width", placeholder: data.icrfRadialWidth, unit: 'm'})}*/}

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

import React, {Component, Fragment} from 'react';
import {Form} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {SPECIES} from "../../constants";
import { Grid, Segment } from 'semantic-ui-react'

const dumpParticleHeatForm = (props) => {
  const {label, placeholder, unit} = props;
  return (
    <Form.Group inline>
      <label>{label}</label>
      <div className="ui right labeled input">
        <input type="text" placeholder={placeholder}/>
        <div className="ui basic label">
          {unit}
        </div>
      </div>
    </Form.Group>
  )
};

class ParticleHeatForm extends Component {
  
  render() {
    return (
      <Fragment>
        <Grid textAlign='left'>
          <Grid.Row columns={2}>
            <Grid.Column width={3}>
              <label>Break point number</label>
            </Grid.Column>
            <Grid.Column width={2}>
              <label>{this.props.breakPointNumber}</label>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column width={3}>
              <label className='grid-time-breakpoint'>Time at this break point</label>
            </Grid.Column>
            <Grid.Column width={4}>
              <div className="ui right labeled input">
              <input type="text" placeholder="0.01"/>
                <div className="ui basic label">
                  ms
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column >
              <fieldset id='login-fieldset'>
                <legend id='login-legend'>Particle Source</legend>
                <Form>
                  <Form.Group inline>
                    <label>Ion species of the source</label>
                    <Form.Select name={'ionSpeciesOfTheSource'} placeholder={SPECIES[1].text} fluid options={SPECIES}/>
                  </Form.Group>

                  {dumpParticleHeatForm({label: "Rate of particle source", placeholder: "0.01", unit: 'ms'})}
                  {dumpParticleHeatForm({label: "Radial position", placeholder: "0.01", unit: 'm'})}
                  {dumpParticleHeatForm({label: "Radial width", placeholder: "0.50", unit: 'm'})}

                </Form>
              </fieldset>
            </Grid.Column>
            <Grid.Column>
              <fieldset id='login-fieldset'>
                <legend id='login-legend'>Heat Source</legend>
                <Form>
                  {dumpParticleHeatForm({label: "NBI total power", placeholder: "0.01", unit: 'W'})}
                  {dumpParticleHeatForm({label: "NBI radial position", placeholder: "0.01", unit: 'm'})}
                  {dumpParticleHeatForm({label: "NBI radial width", placeholder: "0.01", unit: 'm'})}

                  {dumpParticleHeatForm({label: "ICRF total power", placeholder: "0.01", unit: 'W'})}
                  {dumpParticleHeatForm({label: "ICRF radial position", placeholder: "0.01", unit: 'm'})}
                  {dumpParticleHeatForm({label: "ICRF radial width", placeholder: "0.01", unit: 'm'})}

                </Form>
              </fieldset>
            </Grid.Column>
          </Grid.Row>



        </Grid>

        <a href="#control-params" className="btn btn-info" role="button">Back</a>
        <a href="#confirmation" className="btn btn-info" role="button">Next</a>
      
      </Fragment>
    )
  }
}

const mapStateToProps = (newProps, ownProps) => {
  return newProps;
};


export default connect(mapStateToProps, {})(ParticleHeatForm);

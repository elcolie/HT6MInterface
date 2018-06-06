import React, {Component} from 'react';
import {CLICK_CHANGE_SPECIES, NSMAX_OPTIONS} from "../../constants";
import {Form, Table} from 'semantic-ui-react'
import DensityCenterRow from "./densityCenterRow";
import {connect} from 'react-redux';
import DensityTemperatureContainer from "./densityTemperature";
import TemperatureAtCenter from "./temperatureCenter";
import TemperatureEdge from "./temperatureEdge";
import plasmaParams from './plasma-parameters.png';

class SetPlasmaParameter extends Component {
  
  render() {
    return (
      <div>
        <h1 id={'plasma-params'}>Step 2/5: Set plasma parameters</h1>
        <img src={plasmaParams} className={'intermediate-image'} alt={'plasma parameters'}/>
        <fieldset id='login-fieldset'>
          <legend id='dt-legend'>Density and temperature</legend>
          <Form>
            
            <Form.Group inline>
              <label>Number of ion species</label>
              <Form.Select onChange={(event, {value}) => {
                this.props.changeSpecies(value);
              }} name='nsmax' fluid options={NSMAX_OPTIONS} placeholder={'2'}/>
            </Form.Group>
            
            <Table celled striped>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Quantities</Table.HeaderCell>
                  <Table.HeaderCell>Electron</Table.HeaderCell>
                  <Table.HeaderCell>Hydrogen</Table.HeaderCell>
                  <Table.HeaderCell>Deuterium</Table.HeaderCell>
                  <Table.HeaderCell>Tritium</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              
              <Table.Body>
                <DensityCenterRow props={this.props}/>
                <DensityTemperatureContainer props={this.props}/>
                <TemperatureAtCenter props={this.props}/>
                <TemperatureEdge props={this.props}/>
              </Table.Body>
            </Table>
          </Form>
        
        </fieldset>
        
        
        <a href="#machine-params" className="btn btn-info" role="button">Back</a>
        <a href="#transport-params" className="btn btn-info" role="button">Next</a>
      </div>
    )
  }
  
  
}

const mapStateToProps = (newProps, ownProps) => {
  return newProps
};

const changeSpecies = (value) => {
  return {
    type: CLICK_CHANGE_SPECIES,
    payload: value
  }
};

export default connect(mapStateToProps, {changeSpecies})(SetPlasmaParameter);

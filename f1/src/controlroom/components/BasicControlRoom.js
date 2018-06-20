import React, {Component, Fragment} from 'react';
import {Form} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {
  BASIC_DEFAULT,
  ICRF_HEATING_DEFAULT,
  ICRF_HEATING_OPTIONS,
  MACHINE_OPTIONS,
  MACHINE_OPTIONS_DEFAULT,
  MAGNETIC_FIELD_DEFAULT,
  MAGNETIC_FIELD_OPTIONS,
  PLASMA_CURRENT_DEFAULT,
  PLASMA_CURRENT_OPTIONS,
  RATE_OF_GAS_PUFFING_DEFAULT,
  RATE_OF_GAS_PUFFING_OPTIONS,
  SUBMIT_BASIC_FORM
} from "../../constants";
import BalloonNotification from "../../commons/components/balloon";
import tokamakModel from './tokamak-model.png';

class Basic extends Component {
  
  constructor(props) {
    super(props);
    this.state = Object.assign({}, BASIC_DEFAULT)
  }
  
  handleSubmit = (event, payload) => {
    // console.log(this.state);  //I will emit `action` here
    this.props.submitBasicForm(this.state);
  };
  
  handleChange = (event, {name, value}) => {
    //Immediately change the state here
    this.setState({[name]: value});
  };
  
  render() {
    console.log(this.props.basicControlRoomReducer);
    return (
      <Fragment>
        <div>
          <h1>Please provide necessary information for the operation</h1>
          <BalloonNotification props={this.props.basicControlRoomReducer}/>
        </div>
        
        <div>
          <span id='basic-img-form'>
            <img src={tokamakModel} alt='logo' width='30%' height='30%'/>
            <Form id='basic-form' onSubmit={this.handleSubmit}>
              <table>
                <tbody>
                  <tr>
                    <td><b>Machine</b></td>
                    <td><Form.Select name='machineOption' onChange={this.handleChange} fluid options={MACHINE_OPTIONS}
                                     placeholder={MACHINE_OPTIONS_DEFAULT}/></td>
                  </tr>
                  <tr>
                    <td><b>Plasma current (MA)</b></td>
                    <td><Form.Select name='plasmaCurrent' onChange={this.handleChange} fluid
                                     options={PLASMA_CURRENT_OPTIONS}
                                     placeholder={PLASMA_CURRENT_DEFAULT.toString()}/></td>
                  </tr>
                  <tr>
                    <td><b>Magnetic field (T)</b></td>
                    <td><Form.Select name='magneticField' onChange={this.handleChange} fluid
                                     options={MAGNETIC_FIELD_OPTIONS}
                                     placeholder={MAGNETIC_FIELD_DEFAULT.toString()}/></td>
                  </tr>
                  <tr>
                    <td><b>Rate of gas puffing</b></td>
                    <td><Form.Select name='rateOfGasPuffing' onChange={this.handleChange} fluid
                                     options={RATE_OF_GAS_PUFFING_OPTIONS}
                                     placeholder={RATE_OF_GAS_PUFFING_DEFAULT.toString()}/></td>
                  </tr>
                  <tr>
                    <td><b>ICRF heating</b></td>
                    <td><Form.Select name='icrfHeating' onChange={this.handleChange} fluid
                                     options={ICRF_HEATING_OPTIONS}
                                     placeholder={ICRF_HEATING_DEFAULT.toString()}/></td>
                  </tr>
                  <tr>
                    <td><b>Comment</b></td>
                    <td><input placeholder={"This is a basic mode."}/></td>
                  </tr>
                  <tr>
                    <td><Form.Button content='Submit'/></td>
                  </tr>
                </tbody>
              </table>
            </Form>
          </span>
        </div>
      </Fragment>
    )
  }
}

const submitBasicForm = (data) => {
  return {
    type: SUBMIT_BASIC_FORM,
    payload: data
  }
};

const mapStateToProps = (newProps, ownProps) => {
  return newProps;
};

export default connect(mapStateToProps, {submitBasicForm})(Basic);

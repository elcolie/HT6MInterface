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

class Basic extends Component {
  // <Form.Group>
  // <label>Machine</label>
  // <Dropdown placeholder='HT-6M' defaultValue={'HT-6M'} fluid search selection options={MACHINE_OPTIONS}/>
  // </Form.Group>
  
  constructor(props) {
    super(props);
    this.state = Object.assign({}, BASIC_DEFAULT)
  }
  
  handleSubmit = (event, payload) => {
    console.log(`handleSubmit`);
    console.log(this.state);  //I will emit `action` here
    this.props.submitBasicForm(this.state);
  };
  
  handleChange = (event, {name, value}) => {
    //Immediately change the state here
    this.setState({[name]: value});
  };
  
  render() {
    return (
      <Fragment>
        <div>
          <h1>Please provide necessary information for the operation</h1>
          <img src="../tokamak-model.png" alt='logo' width='30%' height='30%'/>
          
          <Form onSubmit={this.handleSubmit}>
            <Form.Group inline>
              <label>Machine</label>
              <Form.Select name='machineOption' onChange={this.handleChange} fluid options={MACHINE_OPTIONS}
                           placeholder={MACHINE_OPTIONS_DEFAULT}/>
            </Form.Group>
            
            <Form.Group inline>
              <label>Plasma current (MA)</label>
              <Form.Select name='plasmaCurrent' onChange={this.handleChange} fluid options={PLASMA_CURRENT_OPTIONS}
                           placeholder={PLASMA_CURRENT_DEFAULT.toString()}/>
            </Form.Group>
            
            <Form.Group inline>
              <label>Magnetic field (T)</label>
              <Form.Select name='magneticField' onChange={this.handleChange} fluid options={MAGNETIC_FIELD_OPTIONS}
                           placeholder={MAGNETIC_FIELD_DEFAULT.toString()}/>
            </Form.Group>
            
            <Form.Group inline>
              <label>Rate of gas puffing</label>
              <Form.Select name='rateOfGasPuffing' onChange={this.handleChange} fluid
                           options={RATE_OF_GAS_PUFFING_OPTIONS} placeholder={RATE_OF_GAS_PUFFING_DEFAULT.toString()}/>
            </Form.Group>
            
            <Form.Group inline>
              <label>ICRF heating</label>
              <Form.Select name='icrfHeating' onChange={this.handleChange} fluid options={ICRF_HEATING_OPTIONS}
                           placeholder={ICRF_HEATING_DEFAULT.toString()}/>
            </Form.Group>
            
            <Form.Group inline>
              <label>Comment</label>
              <input placeholder={"This is a basic mode."}/>
            </Form.Group>
            <Form.Button content='Submit'/>
            <Form.Button content='Reset'/>
          
          </Form>
        
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

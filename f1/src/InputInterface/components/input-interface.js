import React, {Component} from 'react';
import {Field, Props, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {DATABACK} from "../../constants";
import {validate} from '../validate';

class InputInterface extends Component {
  
  onSubmit(values) {
    const {big_radius, small_radius} = values;
    console.log(values);
    
  }
  
  renderField(field) {
    const {meta: {touched, error}} = field;
    const className = `'form-group' ${touched && error ? 'has-danger' : ''}`;
    
    
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          placeholder={field.placeholder}
          autoComplete={field.autocomplete}
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }
  
  render() {
    const {handleSubmit} = this.props;
    
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="big_radius"
          component={this.renderField}
          placeholder="Big Radius"
          autocomplete="Big Radius"
          type="number"
        />
        <Field
          name="small_radius"
          component={this.renderField}
          placeholder="Small Radius"
          autocomplete="Small Radius"
          type="number"
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

const dataBack = (response) => {
  return {
    type: DATABACK,
    payload: response
  }
};

const mapStateToProps = (state, ownProps) => {
  return state
};


export default reduxForm({
  validate,
  form: 'InputInterfaceForm'
})(
  connect(mapStateToProps, {dataBack})(InputInterface)
);
import React, {Component, Fragment} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {SUBMIT_RADIUS} from "../../constants";
import {validate} from '../validate';
import {DisplayGraph} from "../../displays/components/DisplayGraph";

class InputInterface extends Component {
  
  onSubmit(values) {
    //Intentionally use pythonic style here
    this.props.hitSubmitBtn(values);
    
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
      <Fragment>
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
        <DisplayGraph
          myArray={this.props.inputInterface}
        />
      </Fragment>
    );
  }
}

const hitSubmitBtn = (values) => {
  return {
    type: SUBMIT_RADIUS,
    payload: values
  }
};

const mapStateToProps = (state, ownProps) => {
  return state
};


export default reduxForm({
  validate,
  form: 'InputInterfaceForm'
})(
  connect(mapStateToProps, {hitSubmitBtn})(InputInterface)
);
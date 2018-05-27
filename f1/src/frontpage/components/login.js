import React, {Component, Fragment} from 'react';
import {Field, reduxForm} from 'redux-form';
import {validate} from './validators';
import {connect} from 'react-redux';
import {SUBMIT_USERNAME_PASSWORD} from "../../constants";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class Login extends Component {
  onSubmit(values) {
    const {userid, password} = values;
    const data = {
      username: userid,
      password,
    };
    console.log(values);
    this.props.onSubmitClick(data);
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
        
          <a href="/" className='login-form'><img src="tokamak-model.png"/></a>
          <form className='login-form' onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <fieldset className='login-fieldset'>
                <legend className='login-legend'>Authentication</legend>
                <table>
                  <tr>
                    <td><Label>Username</Label></td>
                    <td>
                      <Field
                        name="userid"
                        component={this.renderField}
                        placeholder="User ID"
                        autocomplete="username"
                        type="text"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Password</td>
                    <td>
                      <Field
                        name="password"
                        component={this.renderField}
                        placeholder="Password"
                        autocomplete="current-password"
                        type="password"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='login-marin-top'>
                        <button type="submit" className="btn btn-primary">Login</button>
                        <button type="submit" className="btn btn-primary login-spacing">Forget Password</button>
                      </div>
        
                    </td>
                  </tr>
                </table>
  
              </fieldset>
            </form>
        
      </Fragment>
    )
  }
}

const onSubmitClick = ({username, password}) => {
  return {
    type: SUBMIT_USERNAME_PASSWORD,
    payload: {username, password}
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    state
  }
};

export default reduxForm({
  validate,
  form: 'LoginForm'
})(
  connect(mapStateToProps, {onSubmitClick})(Login)
);
import React, {Component, Fragment} from 'react';
import {Field, reduxForm} from 'redux-form';
import {validate} from './validators';
import {connect} from 'react-redux';
import {SUBMIT_USERNAME_PASSWORD} from "../../constants";
import ErrorMessage from "./ErrorMessage.jsx";
import welcomeHeader from "./welcomeHeader";
import welcomeFooter from "./welcomeFooter";
import tokamakModel from '../../controlroom/components/tokamak-model.png';

class Login extends Component {
  onSubmit(values) {
    const {userid, password} = values;
    const data = {
      username: userid,
      password,
      history: this.props.history
    };
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
    const {
      message,
      isAuthenticated,
    } = this.props.state.userPasswordReducer;
    
    return (
      
      <Fragment>
        {welcomeHeader()}
        <div id='login-area'>
          <a href="/" className='login-img'><img src={tokamakModel} alt='logo'/></a>
          <form id='login-form' onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <ErrorMessage
              isAuthenticated={isAuthenticated}
              message={message}
            />
            <fieldset id='login-fieldset'>
              <legend id='login-legend'>Authentication</legend>
              <table>
                <tbody>
                <tr>
                  <td>Username</td>
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
                </tbody>
                <tbody>
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
                </tbody>
                <tbody>
                <tr>
                  <td></td>
                  <td>
                    <div className='login-marin-top'>
                      <button type="submit" className="btn btn-primary">Login</button>
                      <button type="submit" className="btn btn-primary login-spacing">Forget Password</button>
                    </div>
                  </td>
                </tr>
                </tbody>
              
              </table>
            </fieldset>
          </form>
        </div>
        {welcomeFooter()}
      </Fragment>
    )
  }
}

const onSubmitClick = ({username, password, history}) => {
  return {
    type: SUBMIT_USERNAME_PASSWORD,
    payload: {username, password, history}
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

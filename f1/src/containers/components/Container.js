import React, {Component, Fragment} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Simulator from "../../simulators/components/Simulators";
import Login from "../../frontpage/components/login";
import {connect} from 'react-redux';
import {CHECK_TOKEN} from "../../constants";
import AmLineChart from "../../displays/components/AmLineChart";

const PrivateRoute = ({component: Component, isAuthorized, ...otherProps}) => (
  <Route
    {...otherProps}
    render={props => (
      isAuthorized() ? (<Component {...props} />) :
        (
          <Redirect to={
            {
              pathname: '/',
              state: {from: props.location},
            }
          }
          />
        )
    )}
  />
);



class Container extends Component {
  /*
  * In order to do redux staff and not to mess up with top most <App/>
  * Container has been created to contain them all
  *
  * */
  constructor(props) {
    super(props);
    this.props.validateToken();
  }
  
  render() {
    if((typeof this.props.wrapper) === 'function') {
      return (
        <Fragment>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Login}/>
              <Route exact path='/test-chart/' component={AmLineChart}/>
              <PrivateRoute exact path='/simulator/' isAuthorized={this.props.wrapper} component={Simulator}/>
            </Switch>
          </BrowserRouter>
        </Fragment>
      )
    }else{
      return null;
    }
  }
}

const mapStateToProps = ({verifyTokenReducer}, ownProps) => {
  return verifyTokenReducer
};

const validateToken = () => {
  return {
    type: CHECK_TOKEN,
    payload: undefined
  }
};

export default connect(mapStateToProps, {validateToken})(Container);
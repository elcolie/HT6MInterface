import React, {Component} from 'react';
import axios from "axios/index";
import {Provider} from 'react-redux';
import './App.css';
import rootReducer from "./reducers";
import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Login from './frontpage/components/login';
import Simulator from "./simulators/components/Simulators";
import {BACKEND_URL} from "./constants";
import {getAuthToken} from "./utils";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare)
);
sagaMiddleWare.run(rootSaga);


const PrivateRoute = ({component: Component, isAuthorized, ...otherProps}) => (
  <Route
    {...otherProps}
    render={props => (
      isAuthorized() ? (<Component {...props} />) :
        (
          <Redirect to={
            {
              pathname: '/login',
              state: {from: props.location},
            }
          }
          />
        )
    )}
  />
);

// Deal with an ordinary outdated token. Hacked one will be handle on individual component
function hasToken() {
  const token = localStorage.getItem('authToken');
  const isAuthenticated = !((token === undefined) | (token === null));
  
  let req = axios.create({
    method: 'POST',
    baseURL: `${BACKEND_URL}/api-token-verify/`,
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      token: getAuthToken()
    }
  });
  req.post().then((res) => {
      return true
    })
    .catch((err) => {
      return false
    });
  
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/simulator/' component={Simulator}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;

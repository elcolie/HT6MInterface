import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './App.css';
import rootReducer from "./reducers";
import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import FrontPage from './frontpage/components/FrontPage';

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
  return isAuthenticated;
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <FrontPage/>
      </Provider>
    )
  }
}

export default App;

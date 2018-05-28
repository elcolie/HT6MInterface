import React, {Component, Fragment} from 'react';
import {Provider} from 'react-redux';
import './App.css';
import rootReducer from "./reducers";
import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import FrontPage from './frontpage/components/FrontPage';
import Header from './commons/components/headers';
import Login from './frontpage/components/login';
import Simulator from "./simulators/components/Simulators";

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
    // return(
    //   <Fragment>
    //     <Provider store={store}>
    //     <Header/>
    //     </Provider>
    //   </Fragment>
    // )
    // return (
    //   <Fragment>
    //     <Provider store={store}>
    //       <BrowserRouter>
    //         <div>
    //           <Switch>
    //             <Route exact path='/' component={Login}/>
    //             <Route exact path='/header' component={Header}/>
    //             {/*<PrivateRoute exact path='/simulator' isAuthorized={hasToken} component={Header}/>*/}
    //
    //           </Switch>
    //         </div>
    //
    //       </BrowserRouter>
    //
    //       <FrontPage/>
    //     </Provider>
    //   </Fragment>
    // )
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

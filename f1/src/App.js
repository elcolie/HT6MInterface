import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './App.css';
import rootReducer from "./reducers";
import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';
import 'react-live/react-live.css';
import './example.less';
import './style/react-tabs.css';
import Container from "./containers/components/Container";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare)
);
sagaMiddleWare.run(rootSaga);


class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    )
  }
}

export default App;

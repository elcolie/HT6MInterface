import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './App.css';
import InputInterface from "./InputInterface/components/input-interface";
import rootReducer from "./reducers";
import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';

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
        <InputInterface/>
      </Provider>
    )
  }
}

export default App;

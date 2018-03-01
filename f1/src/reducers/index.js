import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {InputInterfaceReducer} from "../InputInterface/reducers";

const rootReducer = combineReducers({
  inputInterface: InputInterfaceReducer,
  form: formReducer
});

export default rootReducer;
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {InputInterfaceReducer} from "../InputInterface/reducers";
import {UserPasswordReducer} from "../frontpage/reducers";
import {LocalTokenReducer} from "../commons/reducers";

const rootReducer = combineReducers({
  inputInterface: InputInterfaceReducer,
  userPasswordReducer: UserPasswordReducer,
  localTokenReducer: LocalTokenReducer,
  form: formReducer
});

export default rootReducer;
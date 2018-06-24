import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {InputInterfaceReducer} from "../InputInterface/reducers";
import {UserPasswordReducer} from "../frontpage/reducers";
import {LocalTokenReducer} from "../commons/reducers";
import {VerifyTokenReducer} from "../containers/reducers";
import {TINTNavBarReducer} from "../simulators/reducers";
import {
  AdvancedControlRoomReducer,
  BasicControlRoomReducer,
  ConfirmationReducer,
  ControlParametersReducer,
  SpecieReducer
} from "../controlroom/reducers";
import {ChartReducer} from "../displays/chart-reducers";

const rootReducer = combineReducers({
  inputInterface: InputInterfaceReducer,
  userPasswordReducer: UserPasswordReducer,
  localTokenReducer: LocalTokenReducer,
  verifyTokenReducer: VerifyTokenReducer,
  TINTNavBarReducer: TINTNavBarReducer,
  basicControlRoomReducer: BasicControlRoomReducer,
  specieReducer: SpecieReducer,
  controlParametersReducer: ControlParametersReducer,
  confirmationReducer: ConfirmationReducer,
  advancedControlRoomReducer: AdvancedControlRoomReducer,
  chartReducer: ChartReducer,
  form: formReducer
});

export default rootReducer;

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
	ControlParametersReducer, densityReducer,
	ParticleAndHeatSources,
	SpecieReducer
} from "../controlroom/reducers";
import {ChartReducer} from "../displays/chart-reducers";
import {MachineParameterReducer, TransportParameterReducer} from "../controlroom/machineParameterReducer";
import {ListSpecieDT, ListOfDTReducer} from "../controlroom/DensityAndTempReducers";

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
	particleAndHeatSources: ParticleAndHeatSources,
	machineParameterReducer: MachineParameterReducer,
	transportParameterReducer: TransportParameterReducer,
	listSpecieDT: ListSpecieDT,
	densityReducer: densityReducer,
	form: formReducer
});

export default rootReducer;

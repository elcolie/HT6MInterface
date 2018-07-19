import axios from "axios/index";
import {call, put, takeLatest} from "redux-saga/effects";
import {getAuthToken, prepareJWTHeader} from "../utils";
import {
	BACKEND_URL,
	HIT_INTERMEDIATE_BTN,
	INTERMEDIATE_COMPLETE,
	INTERMEDIATE_FAILED,
	PERFECT_PAYLOAD
} from "../constants";
import {openNotification} from "./components/confirmUtils";
import {
	add_values,
	convertParticleAndHeatSources,
	convertSpecieDT,
	decide__notification,
	extract_message
} from "./utils";


const shootIntermediate = (payload) => {
	const url = `${BACKEND_URL}/api/intermediate/`;
	// const data = JSON.stringify(payload);
	// console.log(`payload is `);
	// console.log(payload);
	const {
		machineParameterReducer,
		specieReducer,
		transportParameterReducer,
		controlParametersReducer,
		listSpecieDT,
		particleAndHeatSources,
		densityReducer,
		confirmationReducer
	} = payload;
	const {confirmationText} = confirmationReducer;
	const {
		machine,
		majorRadius,
		minorRadius,
		triangularity,
		ellipticity,
		plasmaCurrent,
		magneticField
	} = machineParameterReducer;
	const {nsmax} = specieReducer;
	const {maximumRunTime, numberOfBreakPoints} = controlParametersReducer;
	const userDeviceParams = {
		machine,
		major_radius: majorRadius,
		minor_radius: minorRadius,
		triangularity: triangularity,
		ellipticity: ellipticity,
		plasma_current: plasmaCurrent,
		magnetic_field: magneticField
	};
	const {densityEqn} = densityReducer;
	const userPlasmaParams = {
		nsmax,
		densityEqn
	};
	const {
		transportModel,
		resistivityModel,
		particleDiffusionModel,
		heatPinchModel,
		bootstrapCurrentModel,
		neoClassicalModel} = transportParameterReducer;
	const userTransportParams = {
		transport_model: transportModel,
		resistivity: resistivityModel,
		particle_diffusion: particleDiffusionModel,
		heat_pinch: heatPinchModel,
		bootstrap_current: bootstrapCurrentModel,
		neoclassical: neoClassicalModel
	};
	const userControlParams = {
		no_break_point: numberOfBreakPoints,
		max_run_time: maximumRunTime,
		heating_params: convertParticleAndHeatSources(particleAndHeatSources)
	};
	const userDensityTemperature = convertSpecieDT(listSpecieDT);
	const data = {
		device_params: add_values({}, userDeviceParams, PERFECT_PAYLOAD.device_params),
		plasma_params: add_values({}, userPlasmaParams, PERFECT_PAYLOAD.device_params),
		density_temperatures: userDensityTemperature,
		transport_params: add_values({}, userTransportParams, PERFECT_PAYLOAD.transport_params),
		control_params: userControlParams,
		comment: confirmationText
	};
	console.log(`data is`);
	console.log(data);
	return axios.post(url, data, {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': prepareJWTHeader(getAuthToken())
		}
	});
};

function* postIntermediate(action) {
	try {
		const res = yield call(shootIntermediate, action.payload);
		yield put({
			type: INTERMEDIATE_COMPLETE,
			payload: res
		});
	} catch (err) {
		const str = JSON.stringify(err, null, 4); // (Optional) beautiful indented output.
		const {statusText, data} = err.response;

		openNotification('device_params', extract_message(data, 'device_params'));
		openNotification('plasma_params', extract_message(data, 'plasma_params'));
		openNotification('transport_params', extract_message(data, 'transport_params'));
		openNotification('control_params', extract_message(data, 'control_params'));

		yield put({
			type: INTERMEDIATE_FAILED,
			payload: err
		});
	}
}

export function* watchSubmitIntermediate() {
	yield takeLatest(HIT_INTERMEDIATE_BTN, postIntermediate)
}
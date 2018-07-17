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
import {decide__notification, extract_message} from "./utils";


const shootIntermediate = (payload) => {
	const url = `${BACKEND_URL}/api/intermediate/`;
	const data = JSON.stringify(payload);
	console.log(`payload is `);
	console.log(payload);
	const {machineParameterReducer} = payload;
	const {
		machine,
		majorRadius,
		minorRadius,
		triangularity,
		ellipticity,
		plasmaCurrent,
		magneticField
	} = machineParameterReducer;

	return axios.post(url, PERFECT_PAYLOAD, {
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
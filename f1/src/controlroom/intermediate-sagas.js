import axios from "axios/index";
import {call, put, takeLatest} from "redux-saga/effects";
import {getAuthToken, prepareJWTHeader} from "../utils";
import {BACKEND_URL, HIT_INTERMEDIATE_BTN, INTERMEDIATE_COMPLETE, INTERMEDIATE_FAILED} from "../constants";


const shootIntermediate = (payload) => {
	const url = `${BACKEND_URL}/api/intermediate/`;
	const data = JSON.stringify(payload);
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
		yield put({
			type: INTERMEDIATE_FAILED,
			payload: err
		});
	}
}

export function* watchSubmitIntermediate() {
	yield takeLatest(HIT_INTERMEDIATE_BTN, postIntermediate)
}
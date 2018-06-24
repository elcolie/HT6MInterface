import axios from "axios/index";
import {call, put, takeLatest} from "redux-saga/effects";
import {BACKEND_URL, GOOD_RESULTS, INVALID_RESULTS, ON_START_CHART} from "../../constants";
import {getAuthToken, prepareJWTHeader} from "../../utils";

const shootResultBackend = (payload) => {
	const url = `${BACKEND_URL}/api/results/${payload}/`;
	return axios.get(url, {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': prepareJWTHeader(getAuthToken())
		}
	})
};


function* askResultBackend(action) {
	try {
		const res = yield call(shootResultBackend, action.payload);
		yield put({
			type: GOOD_RESULTS,
			payload: res
		});
	} catch (err) {
		yield put({
			type: INVALID_RESULTS,
			payload: err
		})
	}
}

export function* watchStartChart() {
	yield takeLatest(ON_START_CHART, askResultBackend)
}
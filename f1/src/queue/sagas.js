import axios from 'axios';
import {call, put, takeLatest} from "redux-saga/effects";
import {BACKEND_URL, SUBMIT_PAGE_CHANGED, TASKS_COMPLETE, TASKS_FAILED} from "../constants";
import {getAuthToken, prepareJWTHeader} from "../utils";

const shootTasks = ({pageIndex}) => {
	const url = `${BACKEND_URL}/api/tasks/`;
	return axios.get(url, {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': prepareJWTHeader(getAuthToken())
		},
		params: {
			page_size: pageIndex
		}
	})
};

function* getTasks(action) {
	try {
		const res = yield call(shootTasks, action.payload);
		yield put({
			type: TASKS_COMPLETE,
			payload: res
		})
	} catch (err) {
		yield put({
			type: TASKS_FAILED,
			payload: err
		})
	}
}

export function* watchPage() {
	yield takeLatest(SUBMIT_PAGE_CHANGED, getTasks)
}
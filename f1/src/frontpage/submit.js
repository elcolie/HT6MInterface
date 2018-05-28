import {call, put, takeEvery} from "redux-saga/effects";
import {
  BACKEND_URL,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SUBMIT_USERNAME_PASSWORD
} from "../constants";


import axios from "axios/index";

const shootApiTokenAuth = (values) => {
  const {username, password} = values;
  return axios.post(`${BACKEND_URL}/api-token-auth/`,
    {username, password});
};


function* shootAPI(action) {
  try {
    const res = yield call(shootApiTokenAuth, action.payload);
    const {history} = action.payload;
    yield put({
      type: LOGIN_SUCCESS,
      payload: res
    });
    // history.push('/simulator');
  } catch (err) {
    yield put({
      type: LOGIN_FAILED,
      payload: err
    });
  }
}

export function* watchLoginBtn() {
  yield takeEvery(SUBMIT_USERNAME_PASSWORD, shootAPI);
}
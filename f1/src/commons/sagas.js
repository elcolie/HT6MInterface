import axios from "axios/index";
import {call, put, takeLatest} from "redux-saga/effects";
import {BACKEND_URL, GET_USERNAME, RESPONSE_FAILED, RESPONSE_USERNAME} from "../constants";
import {getAuthToken, prepareJWTHeader} from "../utils";

const shootApiGetUsername = () => {
  const token = getAuthToken();
  const jwt = prepareJWTHeader(token);
  let request = axios.create({
    method: 'GET',
    baseURL: `${BACKEND_URL}/username/`,
    headers: {
      Authorization: jwt,
      'Content-Type': 'application/json'
    }
  });
  return request.get(null);
};

function* fetchUsername(action) {
  try {
    const res = yield call(shootApiGetUsername);
    yield put({
      type: RESPONSE_USERNAME,
      payload: res
    });
  } catch (err) {
    yield put({
      type: RESPONSE_FAILED,
      payload: err
    });
  }
}

export function* watchGetUsername() {
  yield takeLatest(GET_USERNAME, fetchUsername)
}

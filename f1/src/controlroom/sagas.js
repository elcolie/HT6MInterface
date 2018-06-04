import axios from "axios/index";
import {call, put, takeLatest} from "redux-saga/effects";
import {BACKEND_URL, BASIC_COMPLETE, BASIC_FAILED, SUBMIT_BASIC_FORM} from "../constants";
import {getAuthToken, prepareJWTHeader} from "../utils";

const shootBasic = (payload) => {
  const url = `${BACKEND_URL}/api/basic/`;
  const data = JSON.stringify(payload);
  return axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': prepareJWTHeader(getAuthToken())
    }
  });
  // let tmp = postAxios(url, data);
  // return tmp.post(undefined);
};

function* postBasic(action) {
  console.log(`post basic got an action`);
  console.log(action);
  try {
    const res = yield call(shootBasic, action.payload);
    console.log(`complete`);
    yield put({
      type: BASIC_COMPLETE,
      payload: res
    });
  } catch (err) {
    console.log(`failed`);
    yield put({
      type: BASIC_FAILED,
      payload: err
    });
  }
}

export function* watchSubmitBasic() {
  yield takeLatest(SUBMIT_BASIC_FORM, postBasic)
}

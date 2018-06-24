import axios from "axios/index";
import {call, put, takeLatest} from "redux-saga/effects";
import {ADVANCED_COMPLETE, ADVANCED_FAILED, BACKEND_URL, SUBMIT_ADVANCED_FORM} from "../constants";
import {getAuthToken, prepareJWTHeader} from "../utils";

const shootAdvance = ({file, comment}) => {
  const url = `${BACKEND_URL}/api/advanced-cases/`;
  const formData = new FormData();
  formData.append('file', file);
  formData.append('comment', comment);
  const config = {
    headers: {
      'Authorization': prepareJWTHeader(getAuthToken()),
      'content-type': 'multipart/form-data'
    }
  };
  return axios.post(url, formData, config)
};


function* postAdvanced(action) {
  try {
    const res = yield call(shootAdvance, action.payload);
    console.log(`complete`);
    yield put({
      type: ADVANCED_COMPLETE,
      payload: res
    });
  } catch (err) {
    console.log(`failed`);
    yield put({
      type: ADVANCED_FAILED,
      payload: err
    })
  }
}

export function* watchSubmitAdvance() {
  yield takeLatest(SUBMIT_ADVANCED_FORM, postAdvanced)
}

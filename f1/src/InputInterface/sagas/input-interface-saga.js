import {call, put, takeLatest} from "redux-saga/effects";
import {createAxios} from "../../utils";
import {FORTRAN_ANSWER_COMPLETE, FORTRAN_ANSWER_FAILED, SUBMIT_RADIUS} from "../../constants";


const shootBackend = ({big_radius, small_radius}) => {
  let request = createAxios(null, {
    big_radius,
    small_radius
  });
  return request.post(null, {
    big_radius,
    small_radius
  });
};

function* postBackend(action) {
  try {
    const res = yield call(shootBackend, action.payload);
    yield put({
      type: FORTRAN_ANSWER_COMPLETE,
      payload: res
    });
  } catch (err) {
    yield put({
      type: FORTRAN_ANSWER_FAILED,
      payload: err
    });
  }
}

export function* watchShootBacked() {
  yield takeLatest(SUBMIT_RADIUS, postBackend)
}
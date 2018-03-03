import {all} from 'redux-saga/effects'
import {watchShootBacked} from "./InputInterface/sagas/input-interface-saga";

export default function* rootSaga() {
  yield all([
    watchShootBacked(),
    // watchSelectBranch(),
  ])
}
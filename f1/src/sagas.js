import {all} from 'redux-saga/effects'
import {watchShootBacked} from "./InputInterface/sagas/input-interface-saga";
import {watchLoginBtn} from "./frontpage/submit";

export default function* rootSaga() {
  yield all([
    watchShootBacked(),
    watchLoginBtn(),
    // watchSelectBranch(),
  ])
}
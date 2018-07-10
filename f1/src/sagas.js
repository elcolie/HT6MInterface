import {all} from 'redux-saga/effects'
import {watchShootBacked} from "./InputInterface/sagas/input-interface-saga";
import {watchLoginBtn} from "./frontpage/submit";
import {watchCheckToken, watchGetUsername} from "./commons/sagas";
import {watchSubmitBasic} from "./controlroom/sagas";
import {watchSubmitAdvance} from "./controlroom/advance-sagas";
import {watchStartChart} from "./displays/sagas/value-vs-time";
import {watchSubmitIntermediate} from "./controlroom/intermediate-sagas";

export default function* rootSaga() {
	yield all([
		watchShootBacked(),
		watchLoginBtn(),
		watchGetUsername(),
		watchCheckToken(),
		watchSubmitBasic(),
		watchSubmitAdvance(),
		watchStartChart(),
		watchSubmitIntermediate(),
	])
}

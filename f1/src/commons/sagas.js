import axios from "axios/index";
import {call, put, takeLatest} from "redux-saga/effects";
import {
  BACKEND_URL,
  CHECK_TOKEN,
  GET_USERNAME,
  GOOD_TOKEN,
  INVALID_TOKEN,
  RESPONSE_FAILED,
  RESPONSE_USERNAME
} from "../constants";
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


/*******************************************/

const shootVerifyToken = () =>{
  // Known issue https://github.com/axios/axios/issues/1557
  // let req = axios.create({
  //   method: 'POST',
  //   baseURL: `${BACKEND_URL}/api-token-verify/`,
  //   headers:{
  //     'Content-Type': 'application/json'
  //   },
  //   body :{
  //     token: prepareJWTHeader(getAuthToken())
  //   }
  // });
  return axios.post(`${BACKEND_URL}/api-token-verify/`,
    {token: getAuthToken()});
};


function* askBackend(action){
  try{
    const res = yield call(shootVerifyToken);
    yield put({
      type: GOOD_TOKEN,
      payload: res
    });
  }catch(err){
    yield put({
      type: INVALID_TOKEN,
      payload: err
    });
  }
}

export function* watchCheckToken(){
  yield takeLatest(CHECK_TOKEN, askBackend)
}
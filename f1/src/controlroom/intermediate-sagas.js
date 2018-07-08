import axios from "axios/index";
import {call, put, takeLatest} from "redux-saga/effects";
import {getAuthToken, prepareJWTHeader} from "../utils";
import {BACKEND_URL} from "../constants";


//TODO: WIP Shooting the intermediate
const shootIntermediate = (payload) =>{
	const url = `${BACKEND_URL}/api/basic/`;
  const data = JSON.stringify(payload);
  return axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': prepareJWTHeader(getAuthToken())
    }
  });
};
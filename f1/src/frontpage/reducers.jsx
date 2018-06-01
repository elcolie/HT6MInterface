import {LOGIN_FAILED, LOGIN_SUCCESS, NETWORK_DOWN, SUBMIT_USERNAME_PASSWORD} from "../constants";
import {setAuthToken} from "../utils";

export const UserPasswordReducer = (state = {}, action) => {
  switch (action.type){
    case SUBMIT_USERNAME_PASSWORD:
      return{
        message: 'Please wait'
      };
    case LOGIN_FAILED:
      /*
      * Probably it can failed by 2 reason
      * 1. 404 from server
      * 2. network is down
      * */
      if (action.payload.response === undefined) {
        return NETWORK_DOWN;
      } else {
        const tmp = action.payload.response.request.response;
        const tmp2 = JSON.parse(tmp);
        const data = {
          token: undefined,
          message: tmp2.non_field_errors[0],
          isAuthenticated: false,
          statusCode: action.payload.response.status
        };
        console.log(data);
        return data;
      }
    case LOGIN_SUCCESS:
      //Save token to local storage and update component stage
      const payload = action.payload;
      setAuthToken(payload.data.token);
      return {
        token: payload.data.token,
        message: 'Login Success',
        isAuthenticated: true,
        statusCode: payload.status
      };
    default:
      return state;
  }
};
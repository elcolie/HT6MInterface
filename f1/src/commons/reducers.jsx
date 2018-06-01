import {getAuthToken} from "../utils";
import {ADMIN_EMAIL, GET_LOCAL_TOKEN, RESPONSE_FAILED, RESPONSE_USERNAME} from "../constants";


export const LocalTokenReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_LOCAL_TOKEN:
      /*
      * Has possible 2 outcomes
      * 1. Token is gone
      * 2. Token exist
      *
      * */
      const localToken = getAuthToken();
      if (localToken) {
        return {
          token: getAuthToken(),
        };
      }
      else {
        //Token is gone. Need to kick user to login page
        return {
          token: null
        }
      }
    case RESPONSE_USERNAME:
      let res = action.payload;
      return {
        username: res.data.username,
        statusCode: res.status
      };
    case RESPONSE_FAILED:
      res = action.payload;
      if (401 === res.response.status) {
        //Signature has expired
        return {
          statusCode: res.response.status,
          message: res.response.data.detail
        }
      } else if (undefined === res.response) {
        return {
          statusCode: 503,
          message: res.response.toString()
        }
      }
      else {
        return {
          statusCode: 500,
          message: `Unknown Error. Please contact ${ADMIN_EMAIL}`
        }
      }
    default:
      return state;
  }
};

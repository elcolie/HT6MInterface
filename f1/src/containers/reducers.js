import {GOOD_TOKEN, INVALID_TOKEN} from "../constants";
import {removeAuthToken} from "../utils";

function immediateReturnTrue() {
  return true;
}

function immediateReturnFalse() {
  return false;
}

export const VerifyTokenReducer = (state = {}, action) => {
  switch (action.type) {
    case GOOD_TOKEN:
      return {
        isAuthenticated: true,
        wrapper: immediateReturnTrue
      };
    case INVALID_TOKEN:
      removeAuthToken();
      return {
        isAuthenticated: false,
        wrapper: immediateReturnFalse
      };
    default:
      return state;
  }
};
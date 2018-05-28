import {GOOD_TOKEN, INVALID_TOKEN} from "../constants";

function immediateReturnTrue(){
  return true;
}
function immediateReturnFalse(){
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
      return {
        isAuthenticated: false,
        wrapper: immediateReturnFalse
      };
    default:
      return state;
  }
};
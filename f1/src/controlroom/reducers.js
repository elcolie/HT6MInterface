import {BASIC_COMPLETE, BASIC_FAILED, CLICK_CHANGE_SPECIES} from "../constants";

export const BasicControlRoomReducer = (state = {}, action) => {
  switch (action.type) {
    case BASIC_COMPLETE:
      console.log(`basic complete`);
      console.log(action);
      return {
        message: 'Scenario has been submitted',
        statusCode: 200
      };
    case BASIC_FAILED:
      console.log(`basic failed`);
      console.log(action);
      return {
        message: 'Ark',
        statusCode: 500
      };
    default:
      return state;
  }
};

export const SpecieReducer = (state = {nsmax: 2}, action) => {
  switch (action.type) {
    case CLICK_CHANGE_SPECIES:
      return {
        nsmax: action.payload
      };
    default:
      return state;
  }
};

import {BASIC_COMPLETE, BASIC_FAILED} from "../constants";

export const BasicControlRoomReducer = (state = {}, action) =>{
  switch(action.type){
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

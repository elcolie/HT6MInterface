import {
  BASIC_COMPLETE,
  BASIC_FAILED,
  CLICK_CHANGE_SPECIES,
  MAXIMUM_RUNTIME_CHANGED,
  MAXIMUM_RUNTIME_DEFAULT,
  NUMBER_OF_BREAK_POINTS_CHANGED,
  NUMBER_OF_TIME_BREAK_POINTS_DEFAULT
} from "../constants";

export const BasicControlRoomReducer = (state = {}, action) => {
  switch (action.type) {
    case BASIC_COMPLETE:
      // console.log(`basic complete`);
      // console.log(action);
      return {
        message: 'Scenario has been submitted',
        statusCode: 200
      };
    case BASIC_FAILED:
      // console.log(`basic failed`);
      // console.log(action);
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

export const ControlParametersReducer = (state = {
  numberOfBreakPoints: Number(NUMBER_OF_TIME_BREAK_POINTS_DEFAULT),
  maximumRunTime: Number(MAXIMUM_RUNTIME_DEFAULT)
}, action) => {
  switch (action.type) {
    case NUMBER_OF_BREAK_POINTS_CHANGED:
      state.numberOfBreakPoints = action.payload.value;
      return state;
    case MAXIMUM_RUNTIME_CHANGED:
      state.maximumRunTime = action.payload.value;
      return state;
    default:
      return state;
  }
};

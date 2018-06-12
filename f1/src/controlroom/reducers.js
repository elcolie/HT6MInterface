import {
  BASIC_COMPLETE,
  BASIC_FAILED, CHANGE_CONFIRMATION,
  CLICK_CHANGE_SPECIES,
  MAXIMUM_RUNTIME_CHANGED,
  MAXIMUM_RUNTIME_DEFAULT,
  NUMBER_OF_BREAK_POINTS_CHANGED,
  NUMBER_OF_TIME_BREAK_POINTS_DEFAULT,
  PARTICLE_HEATSOURCE_DEFAULT, PARTICLE_HEATSOURCE_NEXT
} from "../constants";
import {setBreakPointList} from "./utils";

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
  maximumRunTime: Number(MAXIMUM_RUNTIME_DEFAULT),
  steps: setBreakPointList(Number(NUMBER_OF_TIME_BREAK_POINTS_DEFAULT))
}, action) => {
  switch (action.type) {
    case NUMBER_OF_BREAK_POINTS_CHANGED:
      return {
        numberOfBreakPoints: action.payload.value,
        maximumRunTime: state.maximumRunTime,
        steps: setBreakPointList(action.payload.value)
      };
    case MAXIMUM_RUNTIME_CHANGED:
      return {
        numberOfBreakPoints: state.numberOfBreakPoints,
        maximumRunTime: action.payload.value,
        steps: state.steps
      };
    default:
      return state;
  }
};

export const ParticleAndHeatSourcesReducer = (state = [], action) => {
  switch(action.type){
    case PARTICLE_HEATSOURCE_NEXT:
      return state;
    default:
      return state;
  }
};

export const ConfirmationReducer = (state = {}, action) =>{
  switch (action.type){
    case CHANGE_CONFIRMATION:
      return {
        confirmationText: action.payload
      };
    default:
      return state;
  }
};

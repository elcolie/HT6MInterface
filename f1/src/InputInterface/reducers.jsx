import {FORTRAN_ANSWER_COMPLETE, POST_BACKEND} from "../constants";

export const InputInterfaceReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_BACKEND:
      //Simple one just immediately return the new state
      return {
        graph1: [1, 2, 3],
        graph2: [1, 2, 3],
        graph3: [1, 2, 3],
        graph4: [1, 2, 3],
      };
    case FORTRAN_ANSWER_COMPLETE:
      console.log('new state is');
      console.log(action.payload.data);
      return action.payload.data;
    default:
      return state;
  }
};
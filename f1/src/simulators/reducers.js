import {CONTROL_ROOM, NAV_BAR_MENU, QUEUE, RESULTS, WIKI} from "../constants";

export const TINTNavBarReducer = (state = {}, action) => {
  let newState = Object.assign({}, NAV_BAR_MENU);
  switch (action.type) {
    case CONTROL_ROOM:
      newState.controlRoom = true;
      return newState;
    case QUEUE:
      newState.queue = true;
      return newState;
    case RESULTS:
      newState.results = true;
      return newState;
    case WIKI:
      newState.wiki = true;
      return newState;
    default:
      return state;
  }
};
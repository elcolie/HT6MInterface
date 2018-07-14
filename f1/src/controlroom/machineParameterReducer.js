import {CHANGE_MACHINE_PARAM, CHANGE_TRANSPORT_PARAM} from "../constants";

export const MachineParameterReducer = (state = {}, action) => {
	return InsideReducer(state, action, CHANGE_MACHINE_PARAM);
};

//It has exact function like `MachineParameterReducer`. I know HOC will DRY my code
//However, I myself in the future might have hard time to recall
export const TransportParameterReducer = (state = {}, action) => {
	return InsideReducer(state, action, CHANGE_TRANSPORT_PARAM);
};

export const InsideReducer = (state, action, action_name) => {
	switch (action.type) {
		case action_name:
			const {key, value} = action.payload;
			return {
				...state,
				[key]: value
			};
		default:
			return state;
	}
};
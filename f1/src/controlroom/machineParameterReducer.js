import {CHANGE_MACHINE_PARAM, CHANGE_TRANSPORT_PARAM} from "../constants";

export const MachineParameterReducer = (state = {}, action) => {
	switch (action.type) {
		case CHANGE_MACHINE_PARAM:
			const {key, value} = action.payload;
			return {
				...state,
				[key]: value
			};
		default:
			return state;
	}
};

//It has exact function like `MachineParameterReducer`. I know HOC will DRY my code
//However, I myself in the future might have hard time to recall
export const TransportParameterReducer = (state = {}, action) => {
	switch (action.type) {
		case CHANGE_TRANSPORT_PARAM:
			const {key, value} = action.payload;
			return {
				...state,
				[key]: value
			};
		default:
			return state;
	}
};

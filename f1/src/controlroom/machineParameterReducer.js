import {CHANGE_MACHINE_PARAM} from "../constants";

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
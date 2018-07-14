import {ACTIVATE_SPECIE, CHANGE_DT, DENSITY_AND_TEMPERATURE, SPECIE_CHANGE_DT, SPECIE_ORDER} from "../constants";
import {InsideReducer} from "./machineParameterReducer";

export const DensityAndTemperatureReducer = (
		state = Object.assign({}, DENSITY_AND_TEMPERATURE),
		action
) => {
	//Smallest unit of reducer
	return InsideReducer(state, action, CHANGE_DT);
};

export const ActivateReducer = (
		state = Object.assign({}, DENSITY_AND_TEMPERATURE, {specie: undefined}),
		action
) => {
	const {numberOfSpecie} = action.payload;
	switch (action.type) {
		case ACTIVATE_SPECIE:
			if (numberOfSpecie < SPECIE_ORDER[state.specie]) {
				return {
					...state,
					active: false
				};
			} else {
				return {
					...state,
					active: true
				};
			}
		default:
			return state;
	}
};

export const ListActivator = (
		state = [],
		action
) => {
	//Iterate through list of species and ACTIVATE individual
	switch (action.type) {
		case ACTIVATE_SPECIE:
			return state.map((specie) => ActivateReducer(specie, action));
		default:
			return state;
	}
};

export const SpecieChangeDT = (state = {}, action) => {
	const {specie, key, value} = action.payload;
	switch (action.type) {
		case SPECIE_CHANGE_DT:
			if (state.specie === specie) {
				const newAction = {
					type: CHANGE_DT,
					payload: {
						key,
						value
					}
				};
				return DensityAndTemperatureReducer(state, newAction);
			}
			return state;
		default:
			return state;
	}
};

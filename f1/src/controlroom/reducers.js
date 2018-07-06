import {
	ADD_PHS,
	ADD_PHSS,
	ADVANCED_COMPLETE,
	ADVANCED_FAILED,
	BASIC_COMPLETE,
	BASIC_FAILED,
	CHANGE_CONFIRMATION,
	CLICK_CHANGE_SPECIES,
	MAXIMUM_RUNTIME_CHANGED,
	MAXIMUM_RUNTIME_DEFAULT,
	NUMBER_OF_BREAK_POINTS_CHANGED,
	NUMBER_OF_TIME_BREAK_POINTS_DEFAULT,
	PARTICLE_HEATSOURCE_DEFAULT,
	UPDATE_PHS
} from "../constants";
import {setBreakPointList} from "./utils";

export const BasicControlRoomReducer = (state = {}, action) => {
	switch (action.type) {
		case BASIC_COMPLETE:
			return {
				message: 'Scenario has been submitted',
				statusCode: 200
			};
		case BASIC_FAILED:
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

export const ParticleAndHeatSourceReducer = (
		state = {},
		action
) => {
	switch (action.type) {
		case UPDATE_PHS:
			const {key, value, breakPointNumber} = action.payload;
			if (state.breakPointNumber !== breakPointNumber) {
				return state;
			} else {
				return {
					...state,
					[key]: value
				};
			}
		default:
			return Object.assign({}, PARTICLE_HEATSOURCE_DEFAULT);
	}
};

const addPHS = (qty) => {
	let tmp = [];
	for (let i = 0; i < qty; i++) {
		tmp.push(Object.assign({}, PARTICLE_HEATSOURCE_DEFAULT, {breakPointNumber: i}))
	}
	return tmp;
};

export const ParticleAndHeatSources = (
		state = [],
		action
) => {
	switch (action.type) {
		case ADD_PHS:
			const tmp = Object.assign({}, PARTICLE_HEATSOURCE_DEFAULT);
			return [...state, tmp];
		case ADD_PHSS:
			return addPHS(action.payload);
		case UPDATE_PHS:
			return state.map(phs => ParticleAndHeatSourceReducer(phs, action));
		default:
			return state;
	}
};

export const ConfirmationReducer = (state = {}, action) => {
	switch (action.type) {
		case CHANGE_CONFIRMATION:
			return {
				confirmationText: action.payload
			};
		default:
			return state;
	}
};


export const AdvancedControlRoomReducer = (state = {}, action) => {
	switch (action.type) {
		case ADVANCED_COMPLETE:
			console.log(`adv complete`);
			return {
				message: 'Advanced mode form has been submitted',
				statusCode: 200
			};
		case ADVANCED_FAILED:
			console.log(`adv failed`);
			return {
				message: 'Connection failed',
				statusCode: 500
			};
		default:
			return state;
	}
};

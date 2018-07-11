import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
	CHANGE_MACHINE_PARAM,
	CHANGE_TRANSPORT_PARAM,
	CLICK_CHANGE_SPECIES,
	MAXIMUM_RUNTIME_CHANGED,
	MAXIMUM_RUNTIME_DEFAULT,
	NUMBER_OF_TIME_BREAK_POINTS_DEFAULT
} from "./constants";
import {ControlParametersReducer, SpecieReducer} from "./controlroom/reducers";
import deepFreeze from 'deep-freeze';
import {setBreakPointList} from "./controlroom/utils";
import {MachineParameterReducer, TransportParameterReducer} from "./controlroom/machineParameterReducer";


it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App/>, div);
	ReactDOM.unmountComponentAtNode(div);
});


it('ControlParametersReducer maximumRunTime must change', () => {
	const stateBefore = {
		numberOfBreakPoints: Number(NUMBER_OF_TIME_BREAK_POINTS_DEFAULT),
		maximumRunTime: Number(MAXIMUM_RUNTIME_DEFAULT),
		steps: setBreakPointList(Number(NUMBER_OF_TIME_BREAK_POINTS_DEFAULT))
	};
	const stateAfter = {
		numberOfBreakPoints: Number(NUMBER_OF_TIME_BREAK_POINTS_DEFAULT),
		maximumRunTime: 99,
		steps: setBreakPointList(Number(NUMBER_OF_TIME_BREAK_POINTS_DEFAULT))
	};
	const action = {
		type: MAXIMUM_RUNTIME_CHANGED,
		payload: {value: 99}
	};

	deepFreeze(stateBefore);
	deepFreeze(stateAfter);

	expect(
			ControlParametersReducer(stateBefore, action)
	).toEqual(stateAfter);
});

it('ControlParametersReducer has default state', () => {
	const stateAfter = {
		numberOfBreakPoints: Number(NUMBER_OF_TIME_BREAK_POINTS_DEFAULT),
		maximumRunTime: Number(MAXIMUM_RUNTIME_DEFAULT),
		steps: setBreakPointList(Number(NUMBER_OF_TIME_BREAK_POINTS_DEFAULT))
	};
	const action = {
		type: "SOMETHING",
		payload: undefined
	};
	deepFreeze(stateAfter);
	expect(
			ControlParametersReducer(undefined, action)
	).toEqual(stateAfter);
});

it('SpecieReducer has default state', () => {
	const stateAfter = {
		nsmax: 5
	};
	const action = {
		type: CLICK_CHANGE_SPECIES,
		payload: 5
	};

	deepFreeze(stateAfter);
	expect(SpecieReducer(undefined, action)).toEqual(stateAfter);

});

it('SpecieReducer change state nsmax', () => {
	const stateBefore = {
		nsmax: 3
	};
	const stateAfter = {
		nsmax: 5
	};
	const action = {
		type: CLICK_CHANGE_SPECIES,
		payload: 5
	};
	deepFreeze(stateBefore);
	deepFreeze(stateAfter);

	expect(SpecieReducer(stateBefore, action)).toEqual(stateAfter);

});

it('SpecieReducer change state from undefine to valid', () => {
	const stateAfter = {
		nsmax: 5
	};
	const action = {
		type: CLICK_CHANGE_SPECIES,
		payload: 5
	};
	deepFreeze(stateAfter);
	expect(SpecieReducer(undefined, action)).toEqual(stateAfter);
});

it('MachineParameterReducer', () => {
	const stateBefore = {
		majorRadius: 0.1
	};
	const action = {
		type: CHANGE_MACHINE_PARAM,
		payload: {
			key: 'machine',
			value: 'HT-66M'
		}
	};
	const stateAfter = {
		majorRadius: 0.1,
		machine: 'HT-66M'
	};
	deepFreeze(stateBefore);
	deepFreeze(action);
	expect(
			MachineParameterReducer(stateBefore, action)
	).toEqual(stateAfter);
});

it('TransportParameterReducer', () => {
	const stateBefore = {
		'heatPinchModel': "Model-88"
	};
	const action = {
		type: CHANGE_TRANSPORT_PARAM,
		payload: {
			key: 'bootstrapCurrentModel',
			value: "Model-88"
		}
	};
	const stateAfter = {
		'heatPinchModel': "Model-88",
		'bootstrapCurrentModel': "Model-88"
	};
	deepFreeze(stateBefore);
	deepFreeze(action);
	expect(
			TransportParameterReducer(stateBefore, action)
	).toEqual(stateAfter);

});
import {ACTIVATE_SPECIE, CHANGE_DT, DEFAULT_DT, DENSITY_AND_TEMPERATURE, SPECIE_CHANGE_DT} from "../constants";
import deepFreeze from 'deep-freeze';
import {
	ActivateReducer,
	ChangeListSpecieDT,
	DensityAndTemperatureReducer,
	ListOfDTReducer,
	SpecieChangeDT
} from "./DensityAndTempReducers";

it('Test micro reducer change density and temperature', () => {
	const stateBefore = Object.assign({}, DENSITY_AND_TEMPERATURE);
	const action = {
		type: CHANGE_DT,
		payload: {
			key: 'active',
			value: false
		}
	};
	const stateAfter = Object.assign({}, DENSITY_AND_TEMPERATURE, {active: false});
	deepFreeze(stateBefore);
	deepFreeze(action);
	expect(
			DensityAndTemperatureReducer(stateBefore, action)
	).toEqual(stateAfter);
});

it('ActivateReducer deactivate', () => {
	const stateBefore = Object.assign({}, DENSITY_AND_TEMPERATURE, {
		specie: 'deuterium',
		active: true,
	});
	const action = {
		type: ACTIVATE_SPECIE,
		payload: {
			numberOfSpecie: 2
		}
	};
	const stateAfter = Object.assign({}, DENSITY_AND_TEMPERATURE, {
		specie: 'deuterium',
		active: false,
	});
	deepFreeze(stateBefore);
	deepFreeze(action);
	expect(ActivateReducer(stateBefore, action)).toEqual(stateAfter);
});

it('ActivateReducer activate', () => {
	const stateBefore = Object.assign({}, DENSITY_AND_TEMPERATURE, {
		specie: 'deuterium',
		active: false,
	});
	const action = {
		type: ACTIVATE_SPECIE,
		payload: {
			numberOfSpecie: 4
		}
	};
	const stateAfter = Object.assign({}, DENSITY_AND_TEMPERATURE, {
		specie: 'deuterium',
		active: true,
	});
	deepFreeze(stateBefore);
	deepFreeze(action);
	expect(ActivateReducer(stateBefore, action)).toEqual(stateAfter);
});

it('Test step2 change number of ion species', () => {
	const stateBefore = JSON.parse(JSON.stringify(DEFAULT_DT));
	const action = {
		type: ACTIVATE_SPECIE,
		payload: {
			numberOfSpecie: 3
		}
	};
	const stateAfter = [
		{
			specie: 'electron',
			active: true,
			densityOfCenter: 0,
			densityOfEdge: 0,
			tempAtCenter: 0,
			tempAtEdge: 0
		},
		{
			specie: 'hydrogen',
			active: true,
			densityOfCenter: 0,
			densityOfEdge: 0,
			tempAtCenter: 0,
			tempAtEdge: 0
		},
		{
			specie: 'deuterium',
			active: true,
			densityOfCenter: 0,
			densityOfEdge: 0,
			tempAtCenter: 0,
			tempAtEdge: 0
		},
		{
			specie: 'tritium',
			active: false,
			densityOfCenter: 0,
			densityOfEdge: 0,
			tempAtCenter: 0,
			tempAtEdge: 0
		}
	];
	deepFreeze(stateBefore);
	deepFreeze(action);
	expect(ListOfDTReducer(stateBefore, action)).toEqual(stateAfter);
});

it('Change value with specific specie', () => {
	const stateBefore = Object.assign({}, DENSITY_AND_TEMPERATURE, {specie: 'hydrogen'});
	const action = {
		type: SPECIE_CHANGE_DT,
		payload: {
			specie: 'hydrogen',
			key: 'tempAtEdge',
			value: 10
		}
	};
	const stateAfter = {
		specie: 'hydrogen',
		active: true,
		densityOfCenter: 0,
		densityOfEdge: 0,
		tempAtCenter: 0,
		tempAtEdge: 10
	};
	deepFreeze(stateBefore);
	deepFreeze(action);
	expect(SpecieChangeDT(stateBefore, action)).toEqual(stateAfter);
});

it('Change by checking through list of specie', () => {
	const stateBefore = JSON.parse(JSON.stringify(DEFAULT_DT));
	const action = {
		type: SPECIE_CHANGE_DT,
		payload: {
			specie: 'electron',
			key: 'densityOfCenter',
			value: 10
		}
	};
	const stateAfter =
			[
				{
					specie: 'electron',
					active: true,
					densityOfCenter: 10,
					densityOfEdge: 0,
					tempAtCenter: 0,
					tempAtEdge: 0
				},
				Object.assign({}, DENSITY_AND_TEMPERATURE, {specie: 'hydrogen'}),
				Object.assign({}, DENSITY_AND_TEMPERATURE, {specie: 'deuterium', active: false}),
				Object.assign({}, DENSITY_AND_TEMPERATURE, {specie: 'tritium', active: false})
			];
	deepFreeze(stateBefore);
	deepFreeze(action);
	// ChangeListSpecieDT(stateBefore, action);
	expect(
			ChangeListSpecieDT(stateBefore, action)
	).toEqual(stateAfter);

});
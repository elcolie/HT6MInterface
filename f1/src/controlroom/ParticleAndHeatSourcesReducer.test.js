import React from 'react';
import {setBreakPoint} from "./utils";
import {PARTICLE_HEATSOURCE_DEFAULT, UPDATE_PHS} from "../constants";
import {ParticleAndHeatSourcesReducer} from "./reducers";

var deepFreeze = require('deep-freeze');

it('setBreakPoint must set', () => {
	const expectedState = [
		{
			breakPointNumber: 0,
			timeAtBreakPoint: 0.01,

			ionSpeciesOfTheSource: 'Hydrogen',
			rateOfParticleSource: 0.01,
			radialPosition: 0.00,
			radialWidth: 0.50,

			nbiTotalPower: 0.01,
			nbiRadialPosition: 0.01,
			nbiRadialWidth: 0.01,

			icrfTotalPower: 0.01,
			icrfRadialPosition: 0.01,
			icrfRadialWidth: 0.01

		},
		{
			breakPointNumber: 0,
			timeAtBreakPoint: 0.01,

			ionSpeciesOfTheSource: 'Hydrogen',
			rateOfParticleSource: 0.01,
			radialPosition: 0.00,
			radialWidth: 0.50,

			nbiTotalPower: 0.01,
			nbiRadialPosition: 0.01,
			nbiRadialWidth: 0.01,

			icrfTotalPower: 0.01,
			icrfRadialPosition: 0.01,
			icrfRadialWidth: 0.01

		}
	];
	expect(JSON.stringify(setBreakPoint(2))).toBe(
			JSON.stringify(expectedState));

});


it('test updates ParticleAndHeatSource', () => {
	const stateBefore = Object.assign({}, PARTICLE_HEATSOURCE_DEFAULT);
	const action = {
		type: UPDATE_PHS,
		payload: {
			key: 'timeAtBreakPoint',
			value: 10
		}
	};
	const stateAfter = {
		breakPointNumber: 0,
		timeAtBreakPoint: 10,

		ionSpeciesOfTheSource: 'Hydrogen',
		rateOfParticleSource: 0.01,
		radialPosition: 0.00,
		radialWidth: 0.50,

		nbiTotalPower: 0.01,
		nbiRadialPosition: 0.01,
		nbiRadialWidth: 0.01,

		icrfTotalPower: 0.01,
		icrfRadialPosition: 0.01,
		icrfRadialWidth: 0.01
	};
	deepFreeze(stateBefore);
	deepFreeze(action);
	expect(
			ParticleAndHeatSourcesReducer(stateBefore, action)
	).toEqual(stateAfter);
});
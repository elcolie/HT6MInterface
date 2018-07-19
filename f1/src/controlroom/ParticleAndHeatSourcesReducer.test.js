import React from 'react';
import {setBreakPoint} from "./utils";
import {ADD_PHS, SET_PHSS, PARTICLE_HEATSOURCE_DEFAULT, UPDATE_PHS} from "../constants";
import {ParticleAndHeatSourceReducer, ParticleAndHeatSources} from "./reducers";

const deepFreeze = require('deep-freeze');

it('setBreakPoint must set', () => {
	const expectedState = [
		{
			breakPointNumber: 0,
			timeAtBreakPoint: 0.01,
			timeStep: 0.01,

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
			timeStep: 0.01,

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
	//Update the PHS base on the given key & value
	const stateBefore = Object.assign({}, PARTICLE_HEATSOURCE_DEFAULT);
	const action = {
		type: UPDATE_PHS,
		payload: {
			key: 'timeAtBreakPoint',
			value: 10,
			breakPointNumber: 0
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
		icrfRadialWidth: 0.01,
		timeStep: 0.01
	};
	deepFreeze(stateBefore);
	deepFreeze(action);
	expect(
			ParticleAndHeatSourceReducer(stateBefore, action)
	).toEqual(stateAfter);
});

it('test add particle and heat source to list', () => {
	const stateBefore = [];
	const action = {
		type: ADD_PHS
	};
	const stateAfter = [Object.assign({}, PARTICLE_HEATSOURCE_DEFAULT)];
	deepFreeze(stateBefore);
	deepFreeze(action);
	expect(
			ParticleAndHeatSources(stateBefore, action)
	).toEqual(stateAfter);
});

it('test add particle and heat sources by given number', () => {
	const stateBefore = [];
	const action = {
		type: SET_PHSS,
		payload: {
			value: 3	//It comes from `input` tag then value is nested in side it
		}
	};
	const stateAfter = [
		Object.assign({}, PARTICLE_HEATSOURCE_DEFAULT),
		Object.assign({}, PARTICLE_HEATSOURCE_DEFAULT, {breakPointNumber: 1}),
		Object.assign({}, PARTICLE_HEATSOURCE_DEFAULT, {breakPointNumber: 2,})
	];
	deepFreeze(stateBefore);
	deepFreeze(action);
	expect(
			ParticleAndHeatSources(stateBefore, action)
	).toEqual(stateAfter);
});

it('test change the specific `particle and heat source` item in the list', ()=>{
	const stateBefore = [
		Object.assign({}, PARTICLE_HEATSOURCE_DEFAULT),
		Object.assign({}, PARTICLE_HEATSOURCE_DEFAULT, {breakPointNumber: 1}),
		Object.assign({}, PARTICLE_HEATSOURCE_DEFAULT, {breakPointNumber: 2,})
	];
	const action = {
		type: UPDATE_PHS,
		payload: {
			breakPointNumber: 2,
			key: 'ionSpeciesOfTheSource',
			value: 'Elcolion'
		}
	};
	const stateAfter = [
		Object.assign({}, PARTICLE_HEATSOURCE_DEFAULT),
		Object.assign({}, PARTICLE_HEATSOURCE_DEFAULT, {breakPointNumber: 1}),
		Object.assign({}, PARTICLE_HEATSOURCE_DEFAULT, {
			breakPointNumber: 2,
			ionSpeciesOfTheSource: 'Elcolion'
		}),
	];
	deepFreeze(stateBefore);
	deepFreeze(action);
	expect(
			ParticleAndHeatSources(stateBefore, action)
	).toEqual(stateAfter);
});
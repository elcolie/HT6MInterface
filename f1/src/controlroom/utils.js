import React from "react";
import {PARTICLE_HEATSOURCE_DEFAULT} from "../constants";
import {stringifyNumber} from "../utils";

export const setBreakPoint = (numberOfBreakPoints) => {
	let tmp = [];
	const objectTmp = Object.assign({}, PARTICLE_HEATSOURCE_DEFAULT);
	for (let i = 0; i < numberOfBreakPoints; i++) {
		tmp.push(objectTmp);
	}
	return tmp;
};

export const setBreakPointList = (numberOfBreakPoints) => {
	//This will be a state for component
	let tmp = [];
	for (let i = 1; i <= numberOfBreakPoints; i++) {
		tmp.push({
			title: stringifyNumber(i),
			breakPointNumber: i,
		})
	}
	return tmp;
};

export const extract_message = (data, key) => {
	if (typeof data[key] === 'undefined') {
		return null;
	} else {
		return data[key][0];
	}
};

export const add_values = (userInput, defaultValue) => {
	return Object.assign({}, defaultValue, userInput);
};

export const convertSpecieDT = (listSpecieDT) => {
	let tmp = {};
	for (let i = 0; i < listSpecieDT.length; i++) {
		let obj = listSpecieDT[i];
		if (obj.active === true) {
			tmp[obj.specie] = {
				density_of_center: obj.densityOfCenter,
				density_of_edge: obj.densityOfEdge,
				temp_at_center: obj.tempAtCenter,
				temp_at_edge: obj.tempAtEdge,
			}
		}
	}
	return tmp;
};

export const convertParticleAndHeatSources = (particleAndHeatSources) => {
	return particleAndHeatSources.map(phs => {
		const {
			breakPointNumber,
			icrfRadialPosition,
			icrfRadialWidth,
			icrfTotalPower,
			ionSpeciesOfTheSource,
			nbiRadialPosition,
			nbiRadialWidth,
			nbiTotalPower,
			radialPosition,
			radialWidth,
			rateOfParticleSource,
			timeAtBreakPoint,
			timeStep,
		} = phs;
		return {
			break_point_number: breakPointNumber,
			breakpoint_time: timeAtBreakPoint,
			timestep: timeStep,
			rate_of_particle_source: rateOfParticleSource,
			radial_position: radialPosition,
			radial_width: radialWidth,
			nbi_power: nbiTotalPower,
			nbi_radial_position: nbiRadialPosition,
			nbi_radial_width: nbiRadialWidth,
			icrf_power: icrfTotalPower,
			icrf_radial: icrfRadialPosition,
			icrf_radial_width: icrfRadialWidth,
			particle_species: ionSpeciesOfTheSource
		}
	})
};
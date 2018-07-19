import React from 'react';
import deepFreeze from 'deep-freeze';
import {add_values, convertParticleAndHeatSources, convertSpecieDT} from "./utils";
import {PERFECT_PAYLOAD} from "../constants";

it('test default value', () => {
	//Test the value before submission to backend. It must add fill the rest of them
	//with default values
	const userInput = {
		machine: "HT-6M",
	};
	const answer = {
		machine: 'HT-6M',
		major_radius: 0.65,
		minor_radius: 0.2,
		triangularity: 0,
		ellipticity: 1,
		plasma_current: 0.04,
		magnetic_field: 1.5
	};
	expect(add_values(userInput, PERFECT_PAYLOAD.device_params)).toEqual(answer);
});

it('test convert listSpecieDT to Django payload', () => {
	const listSpecieDT = [
		{
			active: true,
			densityOfCenter: 1,
			densityOfEdge: 2,
			specie: "electron",
			tempAtCenter: 3,
			tempAtEdge: 4,
		},
		{
			active: true,
			densityOfCenter: 5,
			densityOfEdge: 6,
			specie: "hydrogen",
			tempAtCenter: 7,
			tempAtEdge: 8,
		},
		{
			active: false,
			densityOfCenter: 0,
			densityOfEdge: 0,
			specie: "deuterium",
			tempAtCenter: 0,
			tempAtEdge: 0,
		},
		{
			active: false,
			densityOfCenter: 0,
			densityOfEdge: 0,
			specie: "tritium",
			tempAtCenter: 0,
			tempAtEdge: 0,
		},
	];
	const python_payload = {
		electron: {
			density_of_center: 1,
			density_of_edge: 2,
			temp_at_center: 3,
			temp_at_edge: 4,
		},
		hydrogen: {
			density_of_center: 5,
			density_of_edge: 6,
			temp_at_center: 7,
			temp_at_edge: 8,
		}
	};
	deepFreeze(listSpecieDT);
	deepFreeze(python_payload);
	expect(convertSpecieDT(listSpecieDT)).toEqual(python_payload);
});

it('test convert particleAndHeatSources to Django payload', () => {
	const particleAndHeatSources = [
		{
			breakPointNumber: 0,
			icrfRadialPosition: 0.01,
			icrfRadialWidth: 0.01,
			icrfTotalPower: 0.01,
			ionSpeciesOfTheSource: "Hydrogen",
			nbiRadialPosition: 0.01,
			nbiRadialWidth: 0.01,
			nbiTotalPower: 0.01,
			radialPosition: 0,
			radialWidth: 0.5,
			rateOfParticleSource: 0.01,
			timeAtBreakPoint: 0.01,
			timeStep: 0.01
		},
		{
			breakPointNumber: 1,
			icrfRadialPosition: 0.01,
			icrfRadialWidth: 0.01,
			icrfTotalPower: 0.01,
			ionSpeciesOfTheSource: "Hydrogen",
			nbiRadialPosition: 0.01,
			nbiRadialWidth: 0.01,
			nbiTotalPower: 0.01,
			radialPosition: 0,
			radialWidth: 0.5,
			rateOfParticleSource: 0.01,
			timeAtBreakPoint: 0.01,
			timeStep: 0.01
		}
	];
	const python_payload = [
		{
			break_point_number: 0,
			breakpoint_time: 0.01,
			timestep: 0.01,
			rate_of_particle_source: 0.01,
			radial_position: 0,
			radial_width: 0.5,
			nbi_power: 0.01,
			nbi_radial_position: 0.01,
			nbi_radial_width: 0.01,
			icrf_power: 0.01,
			icrf_radial: 0.01,
			icrf_radial_width: 0.01,
			particle_species: "Hydrogen"
		},
		{
			break_point_number: 1,
			icrf_radial: 0.01,
			icrf_radial_width: 0.01,
			icrf_power: 0.01,
			particle_species: "Hydrogen",
			nbi_radial_position: 0.01,
			nbi_radial_width: 0.01,
			nbi_power: 0.01,
			radial_position: 0,
			radial_width: 0.5,
			rate_of_particle_source: 0.01,
			breakpoint_time: 0.01,
			timestep: 0.01
		}
	];
	deepFreeze(particleAndHeatSources);
	deepFreeze(python_payload);
	expect(
			convertParticleAndHeatSources (particleAndHeatSources)
	).toEqual(python_payload);
});
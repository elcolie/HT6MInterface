import React from 'react';
import {add_values} from "./utils";
import {PERFECT_PAYLOAD} from "../constants";

it('test default value', ()=>{
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
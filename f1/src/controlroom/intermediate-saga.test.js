import React from 'react';
import {extract_message} from "./utils";

it('Intermediate notification split to individuals', () => {
	const data = {
		device_params: ["This field is required."],
		plasma_params: ["This field is required."],
		transport_params: ["This field is required."],
		control_params: ["This field is required."]
	};
	expect(extract_message(data, 'device_params')).toEqual("This field is required.");
	expect(extract_message(data, 'plasma_params')).toEqual("This field is required.");
	expect(extract_message(data, 'transport_params')).toEqual("This field is required.");
	expect(extract_message(data, 'control_params')).toEqual("This field is required.");
});

it('Intermediate notification partial bad request', ()=>{
	const data = {
		device_params: ["This field is required."],
	};
	expect(extract_message(data, 'device_params')).toEqual("This field is required.");
	expect(extract_message(data, 'plasma_params')).toEqual(null);
});
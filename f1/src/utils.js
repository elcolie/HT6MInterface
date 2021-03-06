import axios from "axios";
import {BACKEND_URL} from "./constants";

export const createAxios = (bigRadius, smallRadius) => {
	// Create axios instance
	return axios.create({
		method: 'POST',
		baseURL: `${BACKEND_URL}`,
		headers: {
			'Content-Type': 'application/json'
		}
	});
};

export const postAxios = (url, data) => {
	return axios.post(url, data, {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': prepareJWTHeader(getAuthToken())
		}
	})
};


export const myCache = () => {
	//Fix the test when runner is on serverside
	//https://stackoverflow.com/questions/50784213/javascript-locally-import-header-on-the-fly-based-on-runner-arguments
	const tmp = Object.assign({}, process.argv);
	if (tmp[4] === '--env=jsdom') {
		// This is awkward. Because you need to use var and require to suppress the red noise when do `UnitTest`
		var cache = require("./localStorageMock2");
		return cache.default;
	} else {
		return localStorage;
	}
};

// Side effects Services
export const getAuthToken = () => {
	const cache = myCache();
	return cache.getItem('authToken');
	// return localStorage.getItem('authToken');
};

export const setAuthToken = (token) => {
	const cache = myCache();
	return cache.setItem('authToken', token);
	// return localStorage.setItem('authToken', token);
};

export const removeAuthToken = () => {
	const cache = myCache();
	return cache.removeItem('authToken');
	// localStorage.removeItem('authToken');
};

export const prepareJWTHeader = (token) => {
	return 'JWT ' + token
};

const special = ['zeroth', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'];
const deca = ['twent', 'thirt', 'fort', 'fift', 'sixt', 'sevent', 'eight', 'ninet'];

export const stringifyNumber = (n) => {
	if (n < 20) return special[n];
	if (n % 10 === 0) return deca[Math.floor(n / 10) - 2] + 'ieth';
	return deca[Math.floor(n / 10) - 2] + 'y-' + special[n % 10];
};

export const getParameterByName = (name, url) => {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, '\\$&');
	let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
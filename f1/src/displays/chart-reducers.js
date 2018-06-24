import {GOOD_RESULTS, INVALID_RESULTS} from "../constants";

export const ChartReducer = (state = {}, action) => {
	switch (action.type) {
		case GOOD_RESULTS:
			console.log(`chart complete`);
			console.log(action.payload);
			return {
				message: 'Chart received',
				statusCode: 200,
				payload: action.payload
			};
		case INVALID_RESULTS:
			console.log(`chart failed`);
			console.log(action.payload);
			return {
				message: 'Connection failed',
				statusCode: 500,
				payload: action.payload
			};
		default:
			return state;
	}
};
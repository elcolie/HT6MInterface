import {PAGE_SIZE, TASKS_COMPLETE, TASKS_FAILED} from "../constants";
import {getParameterByName} from "../utils";


export const QueueReducer = (state = {
	loading: true,
	page: 1,
	pages: -1,
	data: []
}, action) => {
	switch (action.type) {
		case TASKS_COMPLETE:
			const responseURL = action.payload.request.responseURL;
			const page = getParameterByName('page_size', responseURL);
			return {
				data: action.payload.data,
				page: Number(page),
				pages: action.payload.data.length % PAGE_SIZE,
				loading: false
			};
		case TASKS_FAILED:
			return {
				message: 'Connection failed',
				statusCode: 500
			};
		default:
			return state;
	}
};
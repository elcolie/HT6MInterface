import {PAGE_SIZE, TASKS_COMPLETE, TASKS_FAILED} from "../constants";


export const QueueReducer = (state = {}, action) => {
	switch (action.type) {
		case TASKS_COMPLETE:
			console.log(action);
			const responseURL = action.payload.request.responseURL;
			return {
				data: action.payload.data.results,
				pages: action.payload.data.count % PAGE_SIZE,
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
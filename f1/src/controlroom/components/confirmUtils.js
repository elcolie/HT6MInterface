import React from 'react';
import {Button, notification} from 'antd';

export const close = () => {
	console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
};

export const openNotification = (message, description) => {
	const key = `open${Date.now()}`;
	const btn = (
			<Button type="primary" size="small" onClick={() => notification.close(key)}>
				Confirm
			</Button>
	);
	notification['error']({
		message,
		description,
		btn,
		key,
		onClose: close,
		duration: 0
	});
};
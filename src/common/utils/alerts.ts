import { notification } from "antd";

export const notifySuccess = (subject: string, message: string) => {
	notification.success({
		duration: 3, // 3 seconds
		placement: "bottomLeft",
		message: subject,
		description: message,
	});
};

export const notifyError = (subject: string, message: string) => {
	notification.error({
		duration: 3, // 3 seconds
		placement: "bottomLeft",
		message: subject,
		description: message,
	});
};

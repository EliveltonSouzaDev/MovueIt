export const playAudio = (path: string) => new Audio(path).play();

export const sendNotification = (title: string, options: object) =>
	new Notification(title, options);

export const splitValue = (value: string | number, padsize: number = 2) =>
	`${value}`.padStart(padsize, "0");

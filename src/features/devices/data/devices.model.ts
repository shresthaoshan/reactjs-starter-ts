export interface DeviceCreateModel {
	name: string;
	macAddress: string;
	description: string;
}

export interface DeviceUpdateModel extends Omit<DeviceCreateModel, "macAddress"> {
	// status: boolean
}

export interface DeviceModel extends DeviceCreateModel {
	status: boolean;
}

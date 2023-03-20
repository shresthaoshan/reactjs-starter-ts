import localAxios from "../../../common/utils/localAxios";
import { DeviceCreateModel, DeviceModel, DeviceUpdateModel } from "./devices.model";

export const getAllDevices = (): Promise<DeviceModel[]> => localAxios.get(`/device`);

export const postNewDevice = (payload: DeviceCreateModel): Promise<void> => localAxios.post(`/device`, payload);

export const putUpdateDevice = (macAddress: string, payload: DeviceUpdateModel) => localAxios.put(`/device/${macAddress}`, payload);

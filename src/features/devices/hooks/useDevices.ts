import { notifyError } from "../../../common/utils/alerts";
import deviceSlice from "../../../redux/slices/devices.slice";
import { useAppDispatch } from "../../../redux/store";
import { getAllDevices } from "../data/devices.service";

export const useDevices = () => {
	const dispatch = useAppDispatch();

	const onGetDevices = async () => {
		try {
			dispatch(deviceSlice.actions.setLoading());
			const res = await getAllDevices();
			dispatch(deviceSlice.actions.setData(res));
		} catch (error: any) {
			dispatch(deviceSlice.actions.setError(error.message));
			notifyError("Fetch Devices", error.message);
		}
	};

	return { onGetDevices };
};

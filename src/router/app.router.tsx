import { createBrowserRouter } from "react-router-dom";

import Error404 from "../common/components/Error404";
import DeviceView from "../features/devices/DeviceView";
import HomeView from "../features/home/HomeView";

const router = createBrowserRouter([
	{
		index: true,
		element: <HomeView />,
		errorElement: <Error404 />,
	},
	{
		path: "/devices",
		element: <DeviceView />,
		errorElement: <Error404 />,
	},
]);

export default router;

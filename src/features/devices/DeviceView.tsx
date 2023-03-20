import React from "react";
import { List } from "antd";
import { Link } from "react-router-dom";
import { DeviceViewWrapper } from "./styles";
import { useDevices } from "./hooks/useDevices";
import { useAppSelector } from "../../redux/store";

const DeviceView = (): JSX.Element => {
	const devices = useAppSelector((store) => store.devices);

	const { onGetDevices } = useDevices();

	React.useEffect(() => {
		onGetDevices();
	}, []);

	return (
		<DeviceViewWrapper>
			<header>
				<Link to="/">Back to Home</Link>
				<h1>Devices</h1>
			</header>
			<main>
				<List
					dataSource={devices.data}
					loading={devices.status === "loading"}
					renderItem={(item) => (
						<List.Item>
							<List.Item.Meta title={item.name} description={item.macAddress} />
						</List.Item>
					)}
				/>
			</main>
		</DeviceViewWrapper>
	);
};

export default DeviceView;

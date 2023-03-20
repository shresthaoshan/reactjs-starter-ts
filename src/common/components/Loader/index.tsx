import React from "react";
import { LoaderWrapper } from "./styles";
import { Spin } from "antd";

const Loader = () => {
	return (
		<LoaderWrapper>
			<Spin spinning />
		</LoaderWrapper>
	);
};

export default Loader;

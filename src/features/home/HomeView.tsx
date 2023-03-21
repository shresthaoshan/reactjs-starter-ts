import React from "react";
import { HomeViewWrapper } from "./styles";
import { Link } from "react-router-dom";

const HomeView = (): JSX.Element => {
	return (
		<HomeViewWrapper>
			<h1>React Starter v1.1</h1>
			<p>Use this template to quickly start a project.</p>
			<Link to="/devices">Go to Devices</Link>
			<Link to="/movies">Go to Movies</Link>
		</HomeViewWrapper>
	);
};

export default HomeView;

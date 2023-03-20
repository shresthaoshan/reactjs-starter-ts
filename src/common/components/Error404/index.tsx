import React from "react";
import { useRouteError } from "react-router-dom";
import { ErrorPageWrapper } from "./styles";

const Error404 = () => {
	// eslint-disable-next-line
	const error = useRouteError() as any;

	return (
		<ErrorPageWrapper>
			<h3>That's not right!</h3>
			<p>Could not load requested resources.</p>
			<pre>
				Error: <small>{error.statusText || error.message}</small>
			</pre>
		</ErrorPageWrapper>
	);
};

export default Error404;

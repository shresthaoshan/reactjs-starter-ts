import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyles } from "./styles/globals";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalStyles />
			<App />
		</Provider>
	</React.StrictMode>
);

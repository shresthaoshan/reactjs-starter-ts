import { createGlobalStyle, css } from "styled-components";

const globalCss = css`
	body {
		margin: 0;
		padding: 0;
		font-size: 16px;

		min-width: 320px;
		min-height: 100vh;

		--black: #191919;
		--white: #f3f3f3;
		--link-hover: #551a8b;
		--link: #7a2ec1;

		--ff-primary: "Poppins", sans-serif;
		--ff--secondary: "Raleway", sans-serif;

		background: var(--white);
		color: var(--black);
		font-family: var(--ff-primary);

		@media (prefers-color-scheme: dark) {
			background: var(--black);
			color: var(--white);
		}
	}

	a {
		text-decoration: none;
		color: var(--link);
		transition: color 200ms linear;

		&:hover {
			color: var(--link-hover);
		}
	}

	#root {
		padding: 2em;
	}
`;

export const GlobalStyles = createGlobalStyle`
    ${globalCss}
`;

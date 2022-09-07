import styled, { css } from "styled-components";

export const Container = styled.div`
	text-align: left;
	display: flex;
	flex-direction: column;
	width: 22rem;
	height: 4.0625rem;

	div {
		margin-bottom: 0.5rem;
		height: 1.0625rem;
		width: 2.3125rem;

		label {
			font-size: 0.875rem;
			line-height: 1.06rem;
			font-weight: 500;
			color: var(--grey1);
		}

		span {
			color: var(--alert1);
		}
	}

	input {
		height: 3rem;
		width: 19.6875rem;
		border: 1.5px solid var(--grey7);
		border-radius: 4px;

		input::placeholder {
			color: var(--grey3);
		}

		:hover {
			background-color: var(--grey8);
			border: 1.5px solid var(--grey8);
		}

		:focus {
			background-color: var(--grey9);
			border: 1.5px solid var(--brand2);
		}
	}
`;

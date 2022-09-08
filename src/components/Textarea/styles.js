import styled from "styled-components";

export const Container = styled.div`
	text-align: left;
	display: flex;
	flex-direction: column;
	width: 19.6875rem;
	height: 6.5625rem;

	div {
		margin-bottom: 0.8rem;
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
			font-size: 0.875rem;
			line-height: 1.06rem;
			font-weight: 500;
		}
	}

	label,
	textarea {
		letter-spacing: 1px;
	}

	textarea {
		height: 5rem;
		width: 19.6875rem;
		resize: none;
		border: 1.5px solid var(--grey7);
		border-radius: 4px;
		align-items: flex-start;
		display: flex;
		flex-direction: row;

		textarea::placeholder {
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

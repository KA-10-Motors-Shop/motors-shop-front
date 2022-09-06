import styled from "styled-components";

export const Container = styled.li`
	height: 30rem;
	width: 20.5rem;
	/*background-image: image();*/
	background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
	border-radius: 4px 4px 0px 0px;
	margin-right: 0.5rem;
	flex: none;

	div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		padding-left: 1.375rem;
	}

	section.card-data__timer {
		display: flex;
		height: 2.25rem;
		width: 7.68rem;
		border-radius: 25px;
		background-color: var(--whiteFixed);
		margin-top: 2.0625rem;
		align-items: center;
		justify-content: space-evenly;
		margin-bottom: 2.1875rem;

		h6 {
			color: var(--grey1);
			font-size: 1rem;
			font-weight: 500;
			line-height: 1.25rem;
			margin-bottom: 0;
			width: 4.0625rem;
			height: 1.25rem;
		}

		svg {
			color: var(--brand1);
		}
	}

	h6 {
		font-size: 1.25rem;
		color: var(--grey10);
		line-height: 1.56rem;
		margin-bottom: 1.25rem;
		height: 3.125rem;
	}

	p {
		margin-bottom: 1.25rem;
		font-size: 1rem;
		line-height: 1.75rem;
		color: var(--grey5);
		margin-right: 1.94rem;
	}

	section.card-data__user {
		display: flex;
		height: 2rem;
		width: 9.3125rem;
		align-items: center;
		margin-bottom: 1.25rem;

		p {
			border-radius: 9.375rem;
			background-color: var(--brand1);
			width: 2rem;
			height: 2rem;
			color: var(--whiteFixed);
			text-align: center;
			margin-bottom: 0;
			margin-right: 0.5rem;
		}

		span {
			color: var(--whiteFixed);
			font-size: 0.875rem;
			line-height: 1.5rem;
			font-weight: 500;
		}
	}

	section.card-data__vehicle {
		display: flex;
		flex-direction: column;

		div {
			display: flex;
			flex-direction: row;
			padding: 0;

			p {
				color: var(--brand1);
				background-color: var(--brand4);
				border-radius: 4px;
				width: 3.125rem;
				height: 2rem;
				text-align: center;
				margin-right: 0.75rem;
			}
		}

		h6 {
			color: var(--whiteFixed);
			font-size: 1rem;
			font-weight: 500;
			line-height: 1.25rem;
		}
	}

	button {
		width: 20.5rem;
		height: 3.8125rem;
		/*padding-left: 0;*/
		font-size: 1rem;
		font-weight: 600;
		border-radius: 0px 0px 4px 4px;
		display: flex;
		justify-content: space-between;
		padding-left: 1.375rem;
		padding-right: 1.375rem;
		align-items: center;
	}

	@media (min-width: 750px) {
		height: 24.25rem;
		width: 45.94rem;

		section.card-data__timer {
			margin-top: 1.5rem;
			margin-bottom: 4.3125rem;
			width: 7.68rem;
			height: 2.25rem;
			border-radius: 32px;
		}

		h6 {
			margin-bottom: 1rem;
		}

		section.card-data__vehicle {
			flex-direction: row;
			margin-bottom: 0.8rem;

			h6 {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 6.56rem;
				height: 1.25rem;
			}
		}

		button {
			width: 45.94rem;
		}
	}
`;

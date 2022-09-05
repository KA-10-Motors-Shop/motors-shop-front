import styled from "styled-components";

export const Container = styled.li`
	height: 21.875rem;
	width: 19.5rem;
	margin-right: 0.5rem;
	flex: none;
	padding-top: 1.375rem;

	div.box {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
	}

	div.box-img {
		background-color: var(--grey7);
		border-radius: 2px solid var(--grey7);
		width: 19.5rem;
		display: flex;
		justify-content: center;
		margin-bottom: 1rem;
	}

	h6 {
		font-size: 1rem;
		color: var(--grey1);
		line-height: 1.25rem;
		margin-bottom: 1rem;
		width: 19.5rem;
		height: 1.375rem;
	}

	p {
		margin-bottom: 1rem;
		font-size: 0.875rem;
		line-height: 1.5rem;
		color: var(--grey2);
		width: 19.5rem;
		height: 3rem;
	}

	section.card-data__user {
		display: flex;
		height: 2rem;
		width: 7.875rem;
		align-items: center;
		margin-bottom: 1rem;
		margin-top: 1rem;

		p {
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 9.375rem;
			background-color: var(--brand1);
			width: 2rem;
			height: 2rem;
			color: var(--whiteFixed);
			font-weight: 500;
			text-align: center;
			margin-bottom: 0;
			margin-right: 0.5rem;
		}

		span {
			color: var(--grey2);
			font-size: 0.875rem;
			line-height: 1.5rem;
			font-weight: 500;
		}
	}

	section.card-data__vehicle {
		display: flex;
		/*position: relative;*/
		width: 19.3125rem;

		p {
			display: flex;
			align-items: center;
			justify-content: center;
			color: var(--brand1);
			background-color: var(--brand4);
			border-radius: 4px;
			width: 3.1875rem;
			height: 2rem;
			padding: 0.25rem 0.5rem;
			text-align: center;
			margin-right: 0.75rem;
			font-weight: 500;
			font-size: 0.875rem;
			line-height: 1.5rem;
			white-space: nowrap;
		}

		h6 {
			color: var(--grey1);
			font-size: 1rem;
			font-weight: 500;
			line-height: 1.25rem;
			display: flex;
			justify-content: flex-end;
			align-items: center;
		}
	}
`;

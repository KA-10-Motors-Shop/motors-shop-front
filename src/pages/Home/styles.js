import styled from "styled-components";

export const Container = styled.main`
	section.main-coverPage {
		display: flex;
		flex-direction: column;
		padding-top: 8.3125rem;
		background-color: var(--brand2);
		align-items: center;
		max-width: 60rem;
		padding-bottom: 5.3125rem;

		h3 {
			font-size: 2rem;
			line-height: 2.5rem;
			text-align: center;
			margin-bottom: 3.25rem;
			color: var(--grey10);
		}

		p {
			text-align: center;
			color: var(--grey9);
			margin-bottom: 3.25rem;
			line-height: 1.75rem;
		}

		button {
			width: 21.93rem;
			height: 3rem;
			margin-bottom: 1.25rem;
		}
	}
`;

export const AuctionBox = styled.section`
	height: 37.52rem;
	width: 23.4375rem;

	h5 {
		margin-top: 6rem;
		margin-bottom: 5.92rem;
	}

	ul {
		display: flex;
		overflow-x: auto;
		scroll-behavior: smooth;
		height: 34.5rem;

		li:first-child {
			margin-left: 0.75rem;
		}
	}
`;

export const SaleBox = styled.section`
	height: 32.8125rem;
	width: 23.4375rem;

	h5 {
		margin-top: 4.1875rem;
		margin-bottom: 2.5rem;
		font-weight: 600;
		font-size: 1.5rem;
		line-height: 1.875rem;
		color: var(--allBlack);
		margin-left: 1.4375rem;
	}

	ul {
		display: flex;
		overflow-x: auto;
		scroll-behavior: smooth;
		height: 26.5rem;

		li:first-child {
			margin-left: 1.4375rem;
		}
	}
`;

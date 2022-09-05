import styled from "styled-components";

export const HeaderStyled = styled.header`
	section.header-toggle {
		min-width: 23.44rem;
		display: flex;
		height: 5rem;
		position: fixed;
		z-index: 100;

		align-items: center;
		justify-content: space-between;
		border-bottom: 2px solid var(--grey6);
		background-color: var(--whiteFixed);
		padding-left: 1rem;
		padding-right: 1rem;

		img {
			min-width: 9.56rem;
			height: 1.65rem;
		}
	}

	div.header-menu__toggle svg {
		color: var(--grey1);
		cursor: pointer;
	}

	section.header-mobile {
		display: flex;
		position: fixed;
		z-index: 100;
		top: 5rem;
		flex-direction: column;
		justify-content: flex-start;
	}

	ul.header-mobile__list {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;

		li {
			width: 23.375rem;
			height: 4.48rem;
			display: flex;
			flex-direction: column;
			padding-top: 2rem;
			margin-left: 1rem;
			justify-content: center;
		}

		li:nth-child(3) {
			margin-bottom: 0.75rem;
		}

		a {
			color: var(--grey2);
			transition: color 0.2s;

			:hover {
				color: var(--grey3);
			}
		}
	}

	div.header-div__line {
		width: 23.375rem;
		border-bottom: 1px solid var(--grey4);
	}

	ul.header-mobile__list--breadcrumbs {
		height: 14.75rem;
	}

	ul.header-mobile__list--sign {
		height: 11.5rem;

		button {
			width: 20.81rem;
			padding: 1.75rem 0.75rem;
			margin-bottom: 2rem;
			margin-top: 2rem;
		}
	}
`;

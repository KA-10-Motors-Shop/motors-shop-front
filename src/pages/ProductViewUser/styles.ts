import styled from "styled-components";

export const ContainerMenu = styled.section`
	display: flex;
	position: fixed;
	z-index: 100;
	top: 5rem;
	right: 0;
	flex-direction: column;
	justify-content: flex-start;
	width: 12.5rem;
	background-color: var(--grey9);
	border-radius: 4px;
	box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
	margin-right: 0.75rem;
	margin-top: -20px;

	ul.header-mobile__list {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		background-color: var(--whiteFixed);
		padding-left: 1.375rem;
		border-radius: 4px;

		li {
			display: flex;
			flex-direction: column;
			margin-bottom: 1rem;
			justify-content: center;
			border-radius: 4px;

			a {
				color: var(--grey2);
				transition: color 0.2s;
				font-size: 1rem;
				line-height: 1.75rem;

				:hover {
					color: var(--grey3);
				}
			}
		}

		li:first-child {
			margin-top: 1.3125rem;
		}

		li:last-child {
			padding-bottom: 0.75rem;
		}
	}
`;

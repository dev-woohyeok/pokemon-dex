import { createGlobalStyle, css } from 'styled-components';
import { STYLES_CONTAINER } from './type/type';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FFE3B6;
  }
`;

export const commonContainer = (props) => css`
	display: grid;
	grid-template-columns: ${props.$styles === STYLES_CONTAINER.CARD_LIST
		? `repeat(auto-fill, minmax(250px, 1fr))`
		: `repeat(6, minmax(250px, 1fr))`};
	justify-items: center;
	align-items: center;
	width: 100%;
	padding: 2.5rem;
	background-color: #eee;
	border: 1px solid #ccc;
	border-radius: 1rem;
	gap: 3rem;

	@media (max-width: 540px) {
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	}
	@media (max-width: 2000px) {
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}
`;

export default GlobalStyle;

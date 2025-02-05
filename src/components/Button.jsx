import styled from 'styled-components';

function Button({ Type = 'default', onClick, children }) {
	return <StButton onClick={onClick}>{children}</StButton>;
}

const StButton = styled.button`
	background-color: rgb(252, 73, 73);
	color: #000000;
	border: none;
	padding: 0.6rem 1.13rem;
	border-radius: 0.5rem;
	cursor: pointer;
	color: white;
	font-size: calc(0.5rem + 0.8vmin);
	font-weight: bold;
	&:hover {
		background-color: rgb(232, 54, 54);
	}

	@media screen and (max-width: 1024px) {
	}

	@media screen and (max-width: 768px) {
		padding: 0.4rem 1rem;
	}

	@media screen and (max-width: 480px) {
		padding: 0.5rem 1rem;
	}
`;

export default Button;

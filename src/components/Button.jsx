import styled from 'styled-components';

function Button({ onClick, children }) {
	return <StButton onClick={onClick}>{children}</StButton>;
}

const StButton = styled.button`
	background-color: rgb(252, 73, 73);
	color: #000000;
	border: none;
	padding: 0.8rem 1.3rem;
	border-radius: 0.5rem;
	cursor: pointer;
	color: white;

	&:hover {
		background-color: #ffcc00;
	}
`;

export default Button;

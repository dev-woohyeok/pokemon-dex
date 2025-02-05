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
	font-weight: bold;
	&:hover {
		background-color: rgb(232, 54, 54);
	}
`;

export default Button;

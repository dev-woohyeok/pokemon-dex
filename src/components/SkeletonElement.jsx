import styled, { css, keyframes } from 'styled-components';

function SkeletonElement({ type }) {
	return <StSkeleton type={type}></StSkeleton>;
}

const loadingAnimation = keyframes`
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: calc(200px + 100%) 0;
    }
`;

const StSkeleton = styled.div`
	background: #ddd;
	background: linear-gradient(90deg, #ddd 25%, #eee 50%, #ddd 75%);
	background-size: 200px 100%;
	animation: ${loadingAnimation} 1.5s infinite;
	margin: 10px 0;
	border-radius: 4px;

	${({ type }) => {
		switch (type) {
			case `logo`:
				return css`
					width: 900px;
					height: 400px;
					margin: 2rem 0;
					border-radius: 1rem;
				`;
			default:
				return css`
					width: 100%;
					height: 15px;
				`;
		}
	}}
`;

export default SkeletonElement;

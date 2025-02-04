import styled, { css, keyframes } from 'styled-components';

function Skeleton({ type }) {
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
	background: #d2d2d2;
	background: linear-gradient(90deg, #d2d2d2 25%, #eee 50%, #d2d2d2 75%);
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
			case `card`:
				return css`
					width: calc(8rem + 1vw);
					height: calc(8rem + 1vh);

					@media (max-width: 768px) {
						width: calc(6rem + 1vw);
						height: calc(6rem + 1vh);
					}

					@media (max-width: 480px) {
						width: calc(4rem + 1vw);
						height: calc(4rem + 1vh);
					}
				`;
			default:
				return css`
					width: 100%;
					height: 15px;
				`;
		}
	}}
`;

export default Skeleton;

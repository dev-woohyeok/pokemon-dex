import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '/src/components/Button';

import Logo from '/src/components/Logo';

function Home() {
	const nav = useNavigate();

	return (
		<StContainer>
			<Logo />
			<Button onClick={() => nav('/dex', {})}>
				포켓몬 도감 보러 가기
			</Button>
		</StContainer>
	);
}

const StContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

export default Home;

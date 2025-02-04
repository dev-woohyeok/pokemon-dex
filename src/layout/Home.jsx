import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';

import Logo from '../components/Logo';

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
	padding: 20px;
`;

export default Home;

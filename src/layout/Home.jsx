import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';

function Home() {
	const nav = useNavigate();

	return (
		<StContainer>
			<StLogo>
				<StImg
					src="https://github.com/RetroJohn86/Pokemon-Logos-Plus-More/blob/main/Pokemon%20International%20(3).png?raw=true"
					alt="logo"
				/>
			</StLogo>
			<Button onClick={() => nav('/dev', {})}>
				포켓몬 도감 보러 가기
			</Button>
		</StContainer>
	);
}

const StImg = styled.img`
	width: 1000px;
	height: 500px;
`;

const StLogo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
`;

export default Home;

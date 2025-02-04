import styled from 'styled-components';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

function NotFound() {
	const nav = useNavigate();

	return (
		<StContainer>
			<StWrapper>
				<StSubTitle>페이지를 찾을 수 없습니다.</StSubTitle>
				<StText>
					페이지가 존재하지 않거나, 사용할 수 없는 페이지 입니다.
					<br />
					입력하신 주소가 정확한지 다시 한번 확인해주세요
				</StText>
			</StWrapper>
			<Button onClick={() => nav(-1)}>돌아가기</Button>
		</StContainer>
	);
}

const StText = styled.span`
	font-size: 2.5rem;
	color: black;
	font-weight: bold;
`;

const StSubTitle = styled(StText)`
	font-size: 8rem;
	color: black;
	font-weight: 300;
`;

const StWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	text-align: center;
`;

const StContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	border-radius: 1rem;
	margin: 2rem;
	gap: 2rem;
	height: calc(100vh - 4rem);
`;

export default NotFound;

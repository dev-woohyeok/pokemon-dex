import styled from 'styled-components';
import DashBoard from '../components/DashBoard';
import CardList from '../components/CardList';

function Dex() {
	return (
		<StWrapper>
			뭐가문제야?
			<DashBoard />
			<CardList />
		</StWrapper>
	);
}

const StWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 2rem;
	border: 1px solid black;
`;

export default Dex;

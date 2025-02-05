import styled from 'styled-components';
import CardList from '~components/CardList';
import DashBoard from '~components/DashBoard';

function Dex() {
	return (
		<StWrapper>
			<DashBoard />
			<CardList />
		</StWrapper>
	);
}

const StWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: fit-content;
	gap: 2rem;
	padding: 3rem;
`;

export default Dex;

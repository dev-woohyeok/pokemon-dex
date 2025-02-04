import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { DTO_POKEMON } from '~/type/type';
import Button from '~components/Button';
import MOCK_DATA from '~constant/MOCK';

function Detail() {
	const nav = useNavigate();
	const { pid } = useParams();
	const pokemon = MOCK_DATA.find(
		(pokemon) => parseInt(pokemon.id) === parseInt(pid),
	);

	return (
		<StContainer>
			<StImage src={pokemon?.[DTO_POKEMON.IMAGE]} />
			<StName>{pokemon?.[DTO_POKEMON.NAME]}</StName>
			<StType>타입 : {pokemon?.[DTO_POKEMON.TYPES].join(', ')}</StType>
			<StDescription>{pokemon?.[DTO_POKEMON.DESCRIPTION]}</StDescription>
			<Button onClick={() => nav(-1)}>뒤로가기</Button>
		</StContainer>
	);
}

const StContainer = styled.div`
	display: flex;
	min-height: 100vh;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
`;

const StImage = styled.img`
	width: calc(20px + 20vmin);
	width: calc(20px + 20vmin);
`;

const StName = styled.span`
	font-size: calc(2rem + 1vmin);
	font-weight: bold;
	color: rgb(255, 0, 0);
`;

const StType = styled.span`
	font-size: calc(1.5rem + 0.5vmin);
	font-weight: bold;
`;

const StDescription = styled.span`
	font-size: calc(1rem + 0.5vmin);
	font-weight: 300;
`;

export default Detail;

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { DTO_POKEMON } from '~/type/type';
import Button from '~components/Button';
import { addDex, deleteDex } from '~redux/modules/dex';

function Detail() {
	const { pid } = useParams();
	const dex = useSelector((state) => state.dex);
	const pokemon = useSelector((state) => state.pokemons).find(
		(pokemon) => pokemon?.[DTO_POKEMON.ID] == parseInt(pid),
	);
	const dispatch = useDispatch();
	const nav = useNavigate();
	const [isSelected, setIsSelected] = useState(
		dex.some(
			(pokemon) =>
				pokemon?.[DTO_POKEMON.SELECTED] &&
				pokemon?.[DTO_POKEMON.ID] === parseInt(pid),
		),
	);

	const onClickButtonHandler = () => {
		isSelected ? dispatch(deleteDex(pokemon)) : dispatch(addDex(pokemon));
		setIsSelected((prev) => !prev);
	};

	return (
		<StContainer>
			<StImage src={pokemon?.[DTO_POKEMON.IMAGE]} />
			<StName>{pokemon?.[DTO_POKEMON.NAME]}</StName>
			<StType>타입 : {pokemon?.[DTO_POKEMON.TYPES].join(', ')}</StType>
			<StDescription>{pokemon?.[DTO_POKEMON.DESCRIPTION]}</StDescription>
			<StButton>
				{isSelected ? (
					<Button onClick={onClickButtonHandler}>삭제</Button>
				) : (
					<Button onClick={onClickButtonHandler}>추가</Button>
				)}
				<Button onClick={() => nav(-1)}>뒤로가기</Button>
			</StButton>
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
	font-weight: 350;
`;

const StButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	background-color: transparent;
	gap: 1rem;
`;

export default Detail;

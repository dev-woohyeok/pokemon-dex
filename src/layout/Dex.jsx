import { useCallback, useState } from 'react';
import MOCK_DATA from '~constant/MOCK';
import CardList from '~components/CardList';
import DashBoard from '~components/DashBoard';
import styled from 'styled-components';
import { DexContext } from '~hooks/useDexContext';

function Dex() {
	const [pokemonList, setPokemonList] = useState(MOCK_DATA);
	const [dex, setDex] = useState(Array(6).fill({ selected: false }));
	const onAddDexHandler = useCallback((pokemon) => {
		const newPokemon = { ...pokemon, selected: true };
		setDex((prev) => {
			const index = prev.findIndex((obj) => !obj.selected);
			if (index === -1) {
				alert(`최대 6마리까지 선택이 가능합니다.`);
				return prev;
			}
			if (prev.some((obj) => obj.selected && obj.id === pokemon.id)) {
				alert('이미 추가된 포켓몬입니다.');
				return prev;
			}
			return prev.map((pokemon, i) => {
				if (i === index) return newPokemon;
				else return pokemon;
			});
		});
	}, []);

	const onDeleteDexHandler = (pokemon) => {
		setDex((prev) => {
			return prev.map((obj) =>
				obj.id === pokemon.id ? { ...obj, selected: false } : obj,
			);
		});
	};

	const contextValue = {
		pokemonList,
		dex,
		onAddDexHandler,
		onDeleteDexHandler,
	};

	return (
		<StWrapper>
			<DexContext.Provider value={contextValue}>
				<DashBoard />
				<CardList />
			</DexContext.Provider>
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

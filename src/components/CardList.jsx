import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { commonContainer } from '~/GlobalStyle';
import { DTO_POKEMON, STYLES_CARD, STYLES_CONTAINER } from '~/type/type';
import Card from '~components/Card';
import { addDex } from '~redux/modules/dex';

function CardList() {
	const pokemons = useSelector((state) => state.pokemons);
	const dispatch = useDispatch();

	return (
		<StContainer $styles={STYLES_CONTAINER.CARD_LIST}>
			{pokemons.map((pokemon) => {
				return (
					<Card
						key={pokemon[DTO_POKEMON.ID]}
						styles={STYLES_CARD.POKEMON}
						pokemon={pokemon}
						selected={pokemon?.[DTO_POKEMON.SELECTED]}
						onClick={(pokemon) => {
							dispatch(addDex(pokemon));
						}}
					/>
				);
			})}
		</StContainer>
	);
}

const StContainer = styled.div`
	${(props) => commonContainer(props)}
`;

export default React.memo(CardList);

import React from 'react';
import styled from 'styled-components';
import { commonContainer } from '~/GlobalStyle';
import {
	CONTEXT_DEX,
	DTO_POKEMON,
	STYLES_CARD,
	STYLES_CONTAINER,
} from '~/type/type';
import Card from '~components/Card';
import useDexContext from '~hooks/useDexContext';

function CardList() {
	const { [CONTEXT_DEX.POKEMON_LIST]: list, [CONTEXT_DEX.ON_ADD]: onAdd } =
		useDexContext();
	return (
		<StContainer $styles={STYLES_CONTAINER.CARD_LIST}>
			{list.map((pokemon) => {
				return (
					<Card
						key={pokemon[DTO_POKEMON.ID]}
						styles={STYLES_CARD.POKEMON}
						pokemon={pokemon}
						selected={pokemon?.[DTO_POKEMON.SELECTED]}
						onClick={onAdd}
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

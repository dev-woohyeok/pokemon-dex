import styled from 'styled-components';
import { commonContainer } from '~/GlobalStyle';
import { DTO_POKEMON, STYLES_CARD, STYLES_CONTAINER } from '~/type/type';
import Card from '~components/Card';

function DashBoard({ dex, onDelete }) {
	return (
		<StContainer styles={STYLES_CONTAINER.DASH_BOARD}>
			{dex.map((pokemon, index) => {
				return pokemon?.[DTO_POKEMON.SELECTED] ? (
					<Card
						key={`${pokemon?.[DTO_POKEMON.ID]}-${index}`}
						styles={STYLES_CARD.POKEMON}
						pokemon={pokemon}
						selected={pokemon?.[DTO_POKEMON.SELECTED]}
						onClick={onDelete}
					/>
				) : (
					<Card key={`${pokemon?.[DTO_POKEMON.ID]}-${index}`} />
				);
			})}
		</StContainer>
	);
}

const StContainer = styled.div`
	${(props) => commonContainer(props)}
`;

export default DashBoard;

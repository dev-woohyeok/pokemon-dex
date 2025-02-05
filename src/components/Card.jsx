import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { DTO_POKEMON, STYLES_CARD, STYLES_CONTAINER } from '~/type/type';
import Button from '~components/Button';
import Skeleton from '~components/Skeleton';
import useLoad from '~hooks/useLoad';

const defaultCard = {
	src: 'https://www.shareicon.net/data/128x128/2016/12/13/863563_ball_512x512.png',
	alt: 'monster ball',
};

const Card = ({ pokemon, styles = STYLES_CARD.DEFAULT, onClick, selected }) => {
	const [isLoaded, imageSrc] = useLoad(
		pokemon?.[DTO_POKEMON.IMAGE] || defaultCard.src,
	);
	const nav = useNavigate();
	const handleClick = () => {
		styles === STYLES_CARD.POKEMON &&
			nav(`/detail/${pokemon?.[DTO_POKEMON.ID]}`);
	};

	return (
		<StCard onClick={handleClick} type={styles}>
			<StCardAvatar>
				{isLoaded ? (
					<StImage
						src={
							styles === STYLES_CARD.DEFAULT
								? defaultCard.src
								: imageSrc
						}
						alt={
							pokemon?.[DTO_POKEMON.NAME]
								? `${pokemon?.[DTO_POKEMON.NAME]} 이미지`
								: defaultCard.alt
						}
					/>
				) : (
					<Skeleton type="card" />
				)}
			</StCardAvatar>
			{styles === 'pokemon' && (
				<>
					<StCardInfo>
						<StCardName>{pokemon?.[DTO_POKEMON.NAME]}</StCardName>
						<StCardNumber>
							No.{pokemon?.[DTO_POKEMON.ID]}
						</StCardNumber>
					</StCardInfo>
					<StCardButtons>
						{selected ? (
							<Button
								onClick={(e) => {
									e.stopPropagation();
									onClick(pokemon);
								}}
							>
								삭제
							</Button>
						) : (
							<Button
								onClick={(e) => {
									e.stopPropagation();
									onClick(pokemon);
								}}
							>
								추가
							</Button>
						)}
					</StCardButtons>
				</>
			)}
		</StCard>
	);
};

const StCard = styled.div`
	display: flex;
	width: fit-content;
	height: fit-content;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
	border: 4px dashed #ccc;
	border-radius: 1rem;
	background-color: white;

	${({ type }) =>
		type === STYLES_CARD.POKEMON &&
		css`
			border: 1px solid #ccc;
			padding: 2.5rem;
			transition: transform 0.2s;
			cursor: pointer;
			box-shadow: 5px 5px rgba(0, 98, 90, 0.4),
				10px 10px rgba(0, 98, 90, 0.3), 15px 15px rgba(0, 98, 90, 0.2),
				20px 20px rgba(0, 98, 90, 0.1), 25px 25px rgba(0, 98, 90, 0.05);

			&:hover {
				transform: translateY(-5px);
			}
		`}
`;

const StCardAvatar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: calc(8rem + 1vmin);
	height: calc(8rem + 1vmin);

	@media (max-width: 768px) {
		width: calc(6rem + 1vmin);
		height: calc(6rem + 1vmin);
	}

	@media (max-width: 480px) {
		width: calc(4rem + 1vmin);
		height: calc(4rem + 1vmin);
	}
`;

const StImage = styled.img`
	width: 100%;
	height: 100%;
`;

const StCardInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	justify-items: center;
	align-items: center;

	@media (max-width: 768px) {
		gap: 0.4rem;
	}

	@media (max-width: 480px) {
		gap: 0.3rem;
	}
`;

const StCardName = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
	white-space: nowrap;

	@media (max-width: 768px) {
		font-size: 1.2rem;
	}

	@media (max-width: 480px) {
		font-size: 0.8rem;
	}
`;

const StCardNumber = styled.div`
	font-size: 1rem;
	font-weight: 600;
	color: rgb(117, 117, 117);

	@media (max-width: 768px) {
		font-size: 0.9rem;
	}

	@media (max-width: 480px) {
		font-size: 0.6rem;
	}
`;

const StCardButtons = styled.div``;

export default Card;

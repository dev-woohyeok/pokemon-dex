import styled from 'styled-components';
import Skeleton from '~components/Skeleton';

import useLoad from '~hooks/useLoad';

function Logo() {
	const [isLoaded, imgSrc] = useLoad(
		'https://github.com/RetroJohn86/Pokemon-Logos-Plus-More/blob/main/Pokemon%20International%20(3).png?raw=true',
	);

	return (
		<StLogo>
			{isLoaded ? (
				<StImg src={imgSrc} alt="logo" />
			) : (
				<Skeleton type="logo" />
			)}
		</StLogo>
	);
}

const StImg = styled.img`
	width: calc(150px + 40vmin);
	height: calc(50px + 30vmin);
`;

const StLogo = styled.div`
	display: flex;
	justify-items: center;
	align-items: center;
`;

export default Logo;

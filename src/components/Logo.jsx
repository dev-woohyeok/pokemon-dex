import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SkeletonElement from './SkeletonElement';

function Logo() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [imgSrc, setImgSrc] = useState('');

	useEffect(() => {
		const img = new Image();
		img.src =
			'https://github.com/RetroJohn86/Pokemon-Logos-Plus-More/blob/main/Pokemon%20International%20(3).png?raw=true';
		img.onload = () => {
			setImgSrc(img.src);
			setIsLoaded(true);
		};
	}, []);

	return (
		<StLogo>
			{isLoaded ? (
				<StImg src={imgSrc} alt="logo" />
			) : (
				<SkeletonElement type="logo" />
			)}
		</StLogo>
	);
}

const StImg = styled.img`
	width: 1000px;
	height: 500px;
`;

const StLogo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Logo;

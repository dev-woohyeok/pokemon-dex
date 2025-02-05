import { useState, useEffect } from 'react';
import { DTO_POKEMON } from '~/type/type';

function useLoad(url, pokemon) {
	const [isLoaded, setIsLoaded] = useState(false);
	const [image, setImage] = useState(url);

	useEffect(() => {
		const img = new Image();
		img.src = image;
		img.onload = () => {
			if (pokemon?.[DTO_POKEMON.SELECTED] === true)
				console.log('온로드 실행');
			setImage(img.src);
			setIsLoaded(true);
		};
	}, []);

	return [isLoaded, image];
}

export default useLoad;

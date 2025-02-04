import { useState, useEffect } from 'react';

function useLoad(url) {
	const [isLoaded, setIsLoaded] = useState(false);
	const [image, setImage] = useState(url);

	useEffect(() => {
		const img = new Image();
		img.src = image;
		img.onload = () => {
			setImage(img.src);
			setIsLoaded(true);
		};
	}, []);

	return [isLoaded, image];
}

export default useLoad;

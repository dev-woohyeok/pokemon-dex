import { useState } from 'react';

function useLoad(url) {
	const [isLoaded, setIsLoaded] = useState(false);

	const img = new Image();
	img.src = url;
	img.onload = () => {
		setIsLoaded(true);
	};

	return [isLoaded, url];
}

export default useLoad;

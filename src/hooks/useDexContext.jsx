import { createContext, useContext } from 'react';

export const DexContext = createContext();

export default function useDexContext() {
	const context = useContext(DexContext);
	if (!context) {
		throw new Error('Cannot find DexContext');
	}
	return context;
}

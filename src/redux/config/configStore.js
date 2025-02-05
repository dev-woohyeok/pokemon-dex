import { configureStore } from '@reduxjs/toolkit';
import dex from '~/redux/modules/dex';
import pokemons from '~/redux/modules/pokemons';

const store = configureStore({
	reducer: {
		dex,
		pokemons,
	},
});

export default store;

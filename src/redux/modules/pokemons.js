import { createSlice } from '@reduxjs/toolkit';
import MOCK_DATA from '~constant/MOCK';

const pokemonsSlice = createSlice({
	name: 'pokemons',
	initialState: MOCK_DATA,
	reducers: {},
});

export default pokemonsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const dexSlice = createSlice({
	name: 'dex',
	initialState: Array(6).fill({ selected: false }),
	reducers: {
		addDex: (state, action) => {
			const newPokemon = { ...action.payload, selected: true };
			const index = state.findIndex((obj) => !obj.selected);
			if (
				state.some(
					(obj) => obj.selected && obj.id === action.payload.id,
				)
			) {
				alert('이미 추가된 포켓몬입니다.');
				return;
			}
			if (index === -1) {
				alert('최대 6마리까지 선택이 가능합니다.');
				return;
			}
			state[index] = newPokemon;
		},
		deleteDex: (state, action) => {
			const index = state.findIndex(
				(obj) => obj.id === action.payload.id,
			);
			state[index].selected = false;
		},
	},
});

export const { addDex, deleteDex } = dexSlice.actions;
export default dexSlice.reducer;

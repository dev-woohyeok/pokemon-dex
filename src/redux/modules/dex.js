import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import { DTO_POKEMON } from '~/type/type';
import { toastAddPokemon, toastDeletePokemon } from '~constant/toast';

const dexSlice = createSlice({
	name: 'dex',
	initialState: Array(6).fill({ selected: false }),
	reducers: {
		addDex: (state, action) => {
			const newPokemon = { ...action.payload, selected: true };
			const index = state.findIndex((obj) => !obj.selected);
			if (
				state.some(
					(obj) =>
						obj.selected &&
						obj.id === action.payload[DTO_POKEMON.ID],
				)
			) {
				Swal.fire({
					icon: 'error',
					title: '포켓몬 중복 등록',
					text: '이미 선택된 포켓몬입니다!',
				});
				return;
			}
			if (index === -1) {
				Swal.fire({
					icon: 'error',
					title: '포켓몬 초과 등록',
					text: '최대 6마리의 포켓몬만 선택할 수 있습니다!',
				});
				return;
			}
			toastAddPokemon(newPokemon);
			state[index] = newPokemon;
		},
		deleteDex: (state, action) => {
			const index = state.findIndex(
				(obj) => obj.id === action.payload[DTO_POKEMON.ID],
			);
			const newPokemon = { ...action.payload, selected: false };
			toastDeletePokemon(newPokemon);
			state[index] = newPokemon;
		},
	},
});

export const { addDex, deleteDex } = dexSlice.actions;
export default dexSlice.reducer;

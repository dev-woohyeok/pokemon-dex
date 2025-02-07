import React from 'react';
import { Bounce, toast } from 'react-toastify';
import { DTO_POKEMON } from '~/type/type';

export const toastOptions = {
	position: 'top-right',
	autoClose: 3000,
	hideProgressBar: false,
	newestOnTop: false,
	closeOnClick: false,
	rtl: false,
	pauseOnFocusLoss: true,
	draggable: true,
	pauseOnHover: true,
	theme: 'light',
	transition: Bounce,
};

export const toastAddPokemon = (pokemon) => {
	toast.success(`${pokemon?.[DTO_POKEMON.NAME]} 이(가) 추가되었습니다.`, {
		icon: () =>
			React.createElement('img', {
				src: pokemon?.[DTO_POKEMON.IMAGE],
				alt: '포켓몬 아이콘',
			}),
	});
};

export const toastDeletePokemon = (pokemon) => {
	toast.error(`${pokemon?.[DTO_POKEMON.NAME]} 이(가) 삭제되었습니다.`, {
		icon: () =>
			React.createElement('img', {
				src: pokemon?.[DTO_POKEMON.IMAGE],
				alt: '포켓몬 아이콘',
			}),
	});
};

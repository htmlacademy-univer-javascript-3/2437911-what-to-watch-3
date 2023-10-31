import {createAction} from '@reduxjs/toolkit';
import {Genres} from '../consts/Genres.ts';

export const setSpecificGenreAction = createAction<Genres>('setActiveGenre');

export const setAllGenreAction = createAction(Genres.AllGenres);
export const setAllAvailableGenres = createAction('setAllAvailableGenres');

export const setCurrentFilm = createAction<number>('setCurrentFilm');

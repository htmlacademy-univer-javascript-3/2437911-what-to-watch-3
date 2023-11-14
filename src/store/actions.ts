import {createAction} from '@reduxjs/toolkit';
import {Genres} from '../consts/Genres.ts';

export const setCurrentGenre = createAction<Genres>('setActiveGenre');

export const setAllGenreAction = createAction(Genres.AllGenres);

export const setCurrentFilm = createAction<number>('setCurrentFilm');

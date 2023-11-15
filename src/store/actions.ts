import {createAction} from '@reduxjs/toolkit';
import {Genre} from '../consts/genre.ts';
import {FilmPreview, PromoFilm} from '../types/film-data.ts';
import {AuthorizationStatus} from '../consts/authorization-status.ts';

export const setCurrentGenre = createAction<Genre>('setCurrentGenre');

export const loadFilms = createAction<FilmPreview[]>('api/loadFilms');

export const loadPromoFilm = createAction<PromoFilm>('api/loadPromoFilm');

export const setFilmLoadingStatus = createAction<boolean>('api/setFilmLoadingStatus');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('api/setAuthorizationStatus');

export const redirectToRoute = createAction<string>('app/redirectToRoute');

export const setErrorMessage = createAction<string>('app/error');

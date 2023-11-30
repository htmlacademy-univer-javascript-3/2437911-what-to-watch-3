import {createAction} from '@reduxjs/toolkit';
import {Genre} from '../consts/genre.ts';
import {Film, FilmPreview, PromoFilm} from '../types/film-data.ts';
import {AuthorizationStatus} from '../consts/authorization-status.ts';
import {Review} from '../types/review.ts';

export const setCurrentGenre = createAction<Genre>('setCurrentGenre');

export const loadFilms = createAction<FilmPreview[]>('api/loadFilms');

export const loadPromoFilm = createAction<PromoFilm | undefined>('api/loadPromoFilm');

export const loadFilm = createAction<Film | undefined>('api/loadFilm');

export const loadSimilarFilms = createAction<FilmPreview[]>('api/loadSimilarFilms');

export const loadFilmReviews = createAction<Review[]>('api/loadReviews');

export const setFilmLoadingStatus = createAction<boolean>('api/setFilmLoadingStatus');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('api/setAuthorizationStatus');

export const redirectToRoute = createAction<string>('app/redirectToRoute');

export const setSignInErrorMessage = createAction<string | undefined>('app/error');

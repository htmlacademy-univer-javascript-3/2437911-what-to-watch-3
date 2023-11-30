import {stateProps} from '../reducer.ts';

export const authStatusSelector = (state: stateProps) => state.authStatus;

export const errorsSelector = (state: stateProps) => state.signInError;

export const filmSelector = (state: stateProps) => state.film;

export const filmsSelector = (state: stateProps) => state.films;

export const similarFilmsSelector = (state: stateProps) => state.similarFilms;

export const reviewsSelector = (state: stateProps) => state.reviews;

export const promoFilmSelector = (state: stateProps) => state.promoFilm;

export const genreFilmsSelector = (state: stateProps) => state.genreFilms;

export const genreSelector = (state: stateProps) => state.currentGenre;

export const getFilmsLoadingStatus = (state: stateProps) => state.films.isLoading;

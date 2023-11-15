import {Genre} from '../consts/genre.ts';
import {FilmPreview, PromoFilm} from '../types/film-data.ts';
import {createReducer} from '@reduxjs/toolkit';
import {
  loadFilms,
  loadPromoFilm,
  setAuthorizationStatus,
  setCurrentGenre,
  setErrorMessage,
  setFilmLoadingStatus
} from './actions.ts';
import {AuthorizationStatus} from '../consts/authorization-status.ts';

export type stateProps = {
  films: FilmPreview[];
  promoFilm?: PromoFilm;
  currentGenre: Genre;
  genreFilms: FilmPreview[];
  authStatus: AuthorizationStatus;
  isFilmsLoading: boolean;
  error: string | undefined;
}

const startState: stateProps = {
  films: [],
  promoFilm: undefined,
  currentGenre: Genre.AllGenres,
  genreFilms: [],
  authStatus: AuthorizationStatus.Unknown,
  isFilmsLoading: false,
  error: undefined
};

export const reducer = createReducer(startState, (builder) => {
  builder
    .addCase(setCurrentGenre, (state, action) => {
      state.currentGenre = action.payload;
      state.genreFilms = state.films.filter((film) => film.genre === state.currentGenre || state.currentGenre === Genre.AllGenres);
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.genreFilms = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(setFilmLoadingStatus, (state, action) => {
      state.isFilmsLoading = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setErrorMessage, (state, action) => {
      state.error = action.payload;
    });
});

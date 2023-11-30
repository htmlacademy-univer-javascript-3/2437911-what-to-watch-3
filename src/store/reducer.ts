import {Genre} from '../consts/genre.ts';
import {FilmPreview} from '../types/film-data.ts';
import {createReducer} from '@reduxjs/toolkit';
import {
  loadFilm,
  loadFilmReviews,
  loadFilms,
  loadPromoFilm,
  loadSimilarFilms,
  setAuthorizationStatus,
  setCurrentGenre,
  setFilmLoadingStatus,
  setSignInErrorMessage
} from './actions.ts';
import {AuthorizationStatus} from '../consts/authorization-status.ts';
import {
  FetchFilm,
  FetchFilms,
  FetchPromoFilm,
  FetchReviews,
  startFilm,
  startFilms,
  startPromoFilm,
  startReviews
} from '../types/fetch-types.ts';

export type stateProps = {
  films: FetchFilms;
  film: FetchFilm;
  similarFilms: FetchFilms;
  promoFilm: FetchPromoFilm;
  currentGenre: Genre;
  genreFilms: FilmPreview[];
  authStatus: AuthorizationStatus;
  signInError?: string;
  reviews: FetchReviews;
}

const startState: stateProps = {
  films: startFilms,
  film: startFilm,
  similarFilms: startFilms,
  promoFilm: startPromoFilm,
  currentGenre: Genre.AllGenres,
  genreFilms: [],
  authStatus: AuthorizationStatus.Unknown,
  signInError: undefined,
  reviews: startReviews
};

export const reducer = createReducer(startState, (builder) => {
  builder
    .addCase(setCurrentGenre, (state, action) => {
      state.currentGenre = action.payload;
      state.genreFilms = state.films.data.filter((film) =>
        film.genre === state.currentGenre || state.currentGenre === Genre.AllGenres);
    })
    .addCase(loadFilms, (state, action) => {
      state.films.data = action.payload;
      state.genreFilms = action.payload;
    })
    .addCase(setFilmLoadingStatus, (state, action) => {
      state.film.isLoading = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm.data = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.film.data = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms.data = action.payload;
    })
    .addCase(loadFilmReviews, (state, action) => {
      state.reviews.data = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setSignInErrorMessage, (state, action) => {
      state.signInError = action.payload;
    });
});

import {Film, FilmPreview, PromoFilm} from './film-data.ts';
import {Review} from './review.ts';

export type Error = {
  error?: string;
}

export type Loading = {
  isLoading: boolean;
}

export type FetchFilms = Loading & Error & {
  data: FilmPreview[];
};

export const startFilms: FetchFilms = {
  error: undefined,
  isLoading: false,
  data: []
};

export type FetchFilm = Loading & Error & {
  data?: Film;
};

export const startFilm: FetchFilm = {
  error: undefined,
  isLoading: false,
  data: undefined
};

export type FetchPromoFilm = Loading & Error & {
  data?: PromoFilm;
};

export const startPromoFilm: FetchFilm = {
  error: undefined,
  isLoading: false,
  data: undefined
};

export type FetchReviews = Loading & Error & {
  data: Review[];
};

export const startReviews: FetchReviews = {
  error: undefined,
  isLoading: false,
  data: []
};


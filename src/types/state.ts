import {store} from '../store';
import {AuthorizationStatus} from '../consts/authorization-status.ts';
import {Film, FilmPreview, PromoFilm} from './film-data.ts';
import {Review} from './review.ts';
import {Genre} from '../consts/genre.ts';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type WithError = {
    hasError: boolean;
}

export type WithLoading = {
    isLoading: boolean;
}

export type UserProcess = {
    error?: string;
    authorizationStatus: AuthorizationStatus;
};

export type FetchFilms = WithLoading & WithError & {
    films: FilmPreview[];
};

export type FetchAllFilms = {
    films: FetchFilms;
    genreFilms: FilmPreview[];
    currentGenre: Genre;
    promoFilm: FetchPromoFilm;
};

export type FetchFilm = WithLoading & WithError & {
    data?: Film;
}

export type AllFetchFilmInfo = {
    film: FetchFilm;
    reviews: FetchReviews;
    similarFilms: FetchFilms;
};

export type FetchPromoFilm = WithLoading & WithError & {
    data?: PromoFilm;
};

export type FetchReviews = WithLoading & WithError & {
    data: Review[];
};

export type MyListInfo = {
    films: FetchFilms;
}

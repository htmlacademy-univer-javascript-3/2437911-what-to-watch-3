import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {ApiRoute} from '../consts/api-route.ts';
import {Film, FilmPreview, PromoFilm} from '../types/film-data.ts';
import {redirectToRoute} from './actions.ts';
import {dropToken, saveToken} from '../api/token.ts';
import {AuthData, User} from '../types/user.ts';
import {AppRoute} from '../consts/app-route.ts';
import {Review} from '../types/review.ts';
import {sendReviewData} from '../components/ReviewForm.tsx';

export const fetchFilms = createAsyncThunk<FilmPreview[], undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<FilmPreview[]>(ApiRoute.Films);
    return data;
  }
);

export const fetchPromoFilm = createAsyncThunk<PromoFilm, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/fetchPromoFilm',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<PromoFilm>(ApiRoute.PromoFilm);
    return data;
  },
);

export const fetchFilm = createAsyncThunk<Film, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (id, {extra: api}) => {
    const {data} = await api.get<Film>(ApiRoute.Film(id));
    return data;
  },
);

export const fetchSimilarFilms = createAsyncThunk<FilmPreview[], string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async (id, {extra: api}) => {
    const {data} = await api.get<FilmPreview[]>(ApiRoute.SimilarFilms(id));
    return data;
  },
);

export const fetchReviews = createAsyncThunk<Review[], string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/fetchFilmReviews',
  async (id, {extra: api}) => {
    const {data} = await api.get<Review[]>(ApiRoute.Comments(id));
    return data;
  },
);

export const fetchFavoriteFilms = createAsyncThunk<FilmPreview[], undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/fetchFavoriteFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<FilmPreview[]>(ApiRoute.FavoriteFilms);
    return data;
  }
);

type updateFilmFavoriteStatusProps = {
    filmId: string;
    status: number;
}

export const updateFilmFavoriteStatus = createAsyncThunk<void, updateFilmFavoriteStatusProps, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/updateFilmFavoriteStatus',
  async ({filmId, status}, {dispatch, extra: api}) => {
    await api.post(ApiRoute.UpdateFavoriteStatus(filmId, status));
    dispatch(fetchFavoriteFilms());
  }
);

export const addReview = createAsyncThunk<void, sendReviewData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/addFilmReviews',
  async ({id, rating, comment}, {dispatch, extra: api}) => {
    const headers = {'Content-Type': 'application/json', 'Accept': 'application/json'};
    const config = {headers};

    await api.post(ApiRoute.AddComment(id), {comment, rating}, config);
    dispatch(fetchReviews(id));
    dispatch(redirectToRoute(AppRoute.Film(id)));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'auth/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(ApiRoute.CheckLogin);
    dispatch(fetchFavoriteFilms());
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'auth/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<User>(ApiRoute.Login, {
      email,
      password
    });
    saveToken(token);
    dispatch(fetchFavoriteFilms());
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'auth/logout',
  async (_arg, {extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
  },
);

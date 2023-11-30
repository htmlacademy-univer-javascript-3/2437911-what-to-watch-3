import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosError, AxiosInstance} from 'axios';
import {ApiRoute} from '../consts/api-route.ts';
import {Film, FilmPreview, PromoFilm} from '../types/film-data.ts';
import {
  loadFilm,
  loadFilmReviews,
  loadFilms,
  loadPromoFilm,
  loadSimilarFilms,
  redirectToRoute,
  setAuthorizationStatus,
  setFilmLoadingStatus
} from './actions.ts';
import {AuthorizationStatus} from '../consts/authorization-status.ts';
import {dropToken, saveToken} from '../api/token.ts';
import {AuthData, User} from '../types/user.ts';
import {AppRoute} from '../consts/app-route.ts';
import {Review} from '../types/review.ts';
import {sendReviewData} from '../components/ReviewForm.tsx';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    try {
      dispatch(setFilmLoadingStatus(true));
      const {data} = await api.get<FilmPreview[]>(ApiRoute.Films);
      dispatch(loadFilms(data));
    } catch (error) {
      if (error instanceof AxiosError) {
        // dispatch(loadFilms({error: error.message}));
      }
    } finally {
      dispatch(setFilmLoadingStatus(false));
    }
  }
);

export const fetchPromoFilm = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<PromoFilm>(ApiRoute.PromoFilm);
    dispatch(loadPromoFilm(data));
  },
);

export const fetchFilm = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (id, {dispatch, extra: api}) => {
    dispatch(setFilmLoadingStatus(true));
    const {data} = await api.get<Film>(ApiRoute.Film(id));
    dispatch(setFilmLoadingStatus(false));
    dispatch(loadFilm(data));
    dispatch(redirectToRoute(AppRoute.Film(id)));
  },
);

export const fetchSimilarFilms = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (id, {dispatch, extra: api}) => {
    dispatch(setFilmLoadingStatus(true));
    const {data} = await api.get<FilmPreview[]>(ApiRoute.SimilarFilms(id));
    dispatch(setFilmLoadingStatus(false));
    dispatch(loadSimilarFilms(data));
    dispatch(redirectToRoute(AppRoute.Film(id)));
  },
);

export const fetchReviews = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilmReviews',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Review[]>(ApiRoute.Comments(id));
    dispatch(loadFilmReviews(data));
  },
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
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(ApiRoute.CheckLogin);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<User>(ApiRoute.Login, {
      email,
      password
    });
    saveToken(token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  },
);

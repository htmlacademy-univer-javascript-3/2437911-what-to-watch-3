import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {ApiRoute} from '../consts/api-route.ts';
import {FilmPreview, PromoFilm} from '../types/film-data.ts';
import {loadFilms, loadPromoFilm, redirectToRoute, setAuthorizationStatus, setFilmLoadingStatus} from './actions.ts';
import {AuthorizationStatus} from '../consts/authorization-status.ts';
import {dropToken, saveToken} from '../api/token.ts';
import {AuthData, User} from '../types/user.ts';
import {AppRoute} from '../consts/app-route.ts';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmLoadingStatus(true));
    const {data} = await api.get<FilmPreview[]>(ApiRoute.Films);
    dispatch(setFilmLoadingStatus(false));
    dispatch(loadFilms(data));
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
  async ({login: email, password}, {dispatch, extra: api}) => {
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

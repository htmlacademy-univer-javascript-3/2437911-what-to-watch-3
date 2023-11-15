import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {ApiRoute} from '../consts/api-route.ts';
import {FilmPreview, PromoFilm} from '../types/film-data.ts';
import {loadFilms, loadPromoFilm, setFilmLoadingStatus} from './actions.ts';

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

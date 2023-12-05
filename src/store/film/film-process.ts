import {createSlice} from '@reduxjs/toolkit';
import {fetchFilm, fetchReviews, fetchSimilarFilms} from '../actions/api-actions.ts';
import {NameSpace} from '../../consts/namespace.ts';
import {AllFetchFilmInfo, FetchFilm, FetchFilms, FetchReviews} from '../../types/state.ts';

const reviewsInitialState: FetchReviews = {
  hasError: false,
  isLoading: false,
  data: []
};

const similarFilmsInitialState: FetchFilms = {
  hasError: false,
  isLoading: false,
  films: []
};

const fetchFilmInitialState: FetchFilm = {
  hasError: false,
  isLoading: false,
  data: undefined,
};

const initialState: AllFetchFilmInfo = {
  film: fetchFilmInitialState,
  reviews: reviewsInitialState,
  similarFilms: similarFilmsInitialState
};

export const filmProcess = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilm.pending, (state) => {
        state.film.isLoading = true;
        state.film.hasError = false;
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.film.data = action.payload;
        state.film.isLoading = false;
      })
      .addCase(fetchFilm.rejected, (state) => {
        state.film.hasError = true;
        state.film.isLoading = false;
      })

      .addCase(fetchReviews.pending, (state) => {
        state.reviews.isLoading = true;
        state.reviews.hasError = false;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews.data = action.payload;
        state.reviews.isLoading = false;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.reviews.hasError = true;
        state.reviews.isLoading = false;
      })

      .addCase(fetchSimilarFilms.pending, (state) => {
        state.similarFilms.isLoading = true;
        state.similarFilms.hasError = false;
      })
      .addCase(fetchSimilarFilms.fulfilled, (state, action) => {
        state.similarFilms.films = action.payload;
        state.similarFilms.isLoading = false;
      })
      .addCase(fetchSimilarFilms.rejected, (state) => {
        state.similarFilms.hasError = true;
        state.similarFilms.isLoading = false;
      });
  }
});

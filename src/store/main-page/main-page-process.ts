import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchFilms, fetchPromoFilm} from '../actions/api-actions.ts';
import {NameSpace} from '../../consts/namespace.ts';
import {FetchAllFilms, FetchFilms, FetchPromoFilm} from '../../types/state.ts';
import {Genre} from '../../consts/genre.ts';

const initialFilmsState: FetchFilms = {
  hasError: false,
  isLoading: false,
  films: []
};

const initialPromoFilmState: FetchPromoFilm = {
  hasError: false,
  isLoading: false,
  data: undefined
};

export const initialState: FetchAllFilms = {
  films: initialFilmsState,
  genreFilms: [],
  promoFilm: initialPromoFilmState,
  currentGenre: Genre.AllGenres
};

export const mainPageProcess = createSlice({
  name: NameSpace.MainPage,
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<Genre>) => {
      state.currentGenre = action.payload;
      state.genreFilms = state.films.films.filter((film) => film.genre === action.payload || action.payload === Genre.AllGenres);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.films.isLoading = true;
        state.films.hasError = false;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.films.films = action.payload;
        state.genreFilms = action.payload;
        state.films.isLoading = false;
      })
      .addCase(fetchFilms.rejected, (state) => {
        state.films.hasError = true;
        state.films.isLoading = false;
      })

      .addCase(fetchPromoFilm.pending, (state) => {
        state.promoFilm.isLoading = true;
        state.promoFilm.hasError = false;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.promoFilm.data = action.payload;
        state.promoFilm.isLoading = false;
      })
      .addCase(fetchPromoFilm.rejected, (state) => {
        state.promoFilm.hasError = true;
        state.promoFilm.isLoading = false;
      });
  }
});

export const {setGenre} = mainPageProcess.actions;

import {createSlice} from '@reduxjs/toolkit';
import {fetchFavoriteFilms} from '../actions/api-actions.ts';
import {NameSpace} from '../../consts/namespace.ts';
import {FetchFilms, MyListInfo} from '../../types/state.ts';

const initialFilmsState: FetchFilms = {
  hasError: false,
  isLoading: false,
  films: []
};

export const initialState: MyListInfo = {
  films: initialFilmsState,
};

export const myListProcess = createSlice({
  name: NameSpace.MyList,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteFilms.pending, (state) => {
        state.films.isLoading = true;
        state.films.hasError = false;
      })
      .addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
        state.films.films = action.payload;
        state.films.isLoading = false;
      })
      .addCase(fetchFavoriteFilms.rejected, (state) => {
        state.films.hasError = true;
        state.films.isLoading = false;
      });
  }
});

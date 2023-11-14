import {Genres} from '../consts/Genres.ts';
import {films} from '../mocks/films.ts';
import {FilmData} from '../types/filmData.ts';
import {createReducer} from '@reduxjs/toolkit';
import {setAllGenreAction, setCurrentGenre} from './actions.ts';
import {AuthorizationStatuses} from '../consts/AuthorizationStatuses.ts';

export type stateProps = {
  currentGenre: Genres;
  films: FilmData[];
  authStatus: AuthorizationStatuses;
}

const startState: stateProps = {
  currentGenre: Genres.AllGenres,
  films: films,
  authStatus: AuthorizationStatuses.AUTH
};

export const reducer = createReducer(startState, (builder) => {
  builder
    .addCase(setCurrentGenre, (state, action) => {
      state.currentGenre = action.payload;
      state.films = films.filter((film) => film.genre === state.currentGenre || state.currentGenre === Genres.AllGenres);
    })
    .addCase(setAllGenreAction, (state) => {
      state.currentGenre = Genres.AllGenres;
      state.films = films;
    });
});

import {Genres} from '../consts/Genres.ts';
import {films} from '../mocks/films.ts';
import {FilmData} from '../types/filmData.ts';
import {createReducer} from '@reduxjs/toolkit';
import {setAllGenreAction, setSpecificGenreAction} from './actions.ts';
import {AuthorizationStatuses} from '../consts/AuthorizationStatuses.ts';

export type stateProps = {
  activeGenre: Genres;
  allGenres: Genres[];
  genreFilms: FilmData[];
  authStatus: AuthorizationStatuses;
}

function getAvailableGenres(): Genres[] {
  const genres: Genres[] = [];
  for (const film of films) {
    if (!genres.includes(film.genre)) {
      genres.push(film.genre);
    }
  }

  return genres;
}

const startState: stateProps = {
  activeGenre: Genres.AllGenres,
  allGenres: getAvailableGenres(),
  genreFilms: films,
  authStatus: AuthorizationStatuses.AUTH
};

export const reducer = createReducer(startState, (builder) => {
  builder
    .addCase(setSpecificGenreAction, (state, action) => {
      state.activeGenre = action.payload;
      state.genreFilms = films.filter((film) => film.genre === state.activeGenre);
    })
    .addCase(setAllGenreAction, (state) => {
      state.activeGenre = Genres.AllGenres;
      state.genreFilms = films;
    });
});

import {State} from '../../types/state.ts';
import {NameSpace} from '../../consts/namespace.ts';

export const getFilms = (state: State) => state[NameSpace.MainPage].films;

export const getPromoFilm = (state: State) => state[NameSpace.MainPage].promoFilm;

export const getGenreFilms = (state: State) => state[NameSpace.MainPage].genreFilms;

export const getGenre = (state: State) => state[NameSpace.MainPage].currentGenre;

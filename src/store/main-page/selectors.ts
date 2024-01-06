import {State} from '../../types/state.ts';
import {NameSpace} from '../../consts/namespace.ts';

export const getFilms = (state: Pick<State, NameSpace.MainPage>) => state[NameSpace.MainPage].films;

export const getPromoFilm = (state: Pick<State, NameSpace.MainPage>) => state[NameSpace.MainPage].promoFilm;

export const getGenreFilms = (state: Pick<State, NameSpace.MainPage>) => state[NameSpace.MainPage].genreFilms;

export const getGenre = (state: Pick<State, NameSpace.MainPage>) => state[NameSpace.MainPage].currentGenre;

import {State} from '../../types/state.ts';
import {NameSpace} from '../../consts/namespace.ts';

export const getFilm = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].film;

export const getSimilarFilms = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].similarFilms.films;

export const getReviews = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].reviews.data;

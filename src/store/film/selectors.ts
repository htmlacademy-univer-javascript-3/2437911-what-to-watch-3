import {State} from '../../types/state.ts';
import {NameSpace} from '../../consts/namespace.ts';

export const getFilm = (state: State) => state[NameSpace.Film].film;

export const getSimilarFilms = (state: State) => state[NameSpace.Film].similarFilms.films;

export const getReviews = (state: State) => state[NameSpace.Film].reviews.data;

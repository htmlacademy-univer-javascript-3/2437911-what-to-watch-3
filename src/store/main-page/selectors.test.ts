import {NameSpace} from '../../consts/namespace.ts';
import {getFilms, getGenre, getGenreFilms, getPromoFilm} from './selectors.ts';
import {makeFakeFetchAllFilms} from '../../utils/mocks.ts';

describe('MainPageProcess selectors', () => {
  const state = {
    [NameSpace.MainPage]: makeFakeFetchAllFilms()
  };

  it('should return films from state', () => {
    const {films} = state[NameSpace.MainPage];
    const result = getFilms(state);
    expect(result).toBe(films);
  });

  it('should return promoFilm from state', () => {
    const {promoFilm} = state[NameSpace.MainPage];
    const result = getPromoFilm(state);
    expect(result).toBe(promoFilm);
  });

  it('should return genreFilms from state', () => {
    const {genreFilms} = state[NameSpace.MainPage];
    const result = getGenreFilms(state);
    expect(result).toBe(genreFilms);
  });

  it('should return currentGenre from state', () => {
    const {currentGenre} = state[NameSpace.MainPage];
    const result = getGenre(state);
    expect(result).toBe(currentGenre);
  });
});

import {NameSpace} from '../../consts/namespace.ts';
import {getFilm, getReviews, getSimilarFilms} from './selectors.ts';
import {makeFakeAllFetchFilmInfo} from '../../utils/mocks.ts';

describe('FilmProcess selectors', () => {
  const state = {
    [NameSpace.Film]: makeFakeAllFetchFilmInfo()
  };

  it('should return film from state', () => {
    const {film} = state[NameSpace.Film];
    const result = getFilm(state);
    expect(result).toBe(film);
  });

  it('should return reviews from state', () => {
    const {reviews} = state[NameSpace.Film];
    const result = getReviews(state);
    expect(result).toBe(reviews.data);
  });

  it('should return similar films from state', () => {
    const {similarFilms} = state[NameSpace.Film];
    const result = getSimilarFilms(state);
    expect(result).toBe(similarFilms.films);
  });
});

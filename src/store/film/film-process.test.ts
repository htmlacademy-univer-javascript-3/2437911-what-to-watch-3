import {
  emptyAction,
  makeFakeAllFetchFilmInfo,
  makeFakeFilm,
  makeFakeFilmPreview,
  makeFakeReview
} from '../../utils/mocks.ts';
import {filmProcess, initialState} from './film-process.ts';
import {expect} from 'vitest';
import {fetchFilm, fetchReviews, fetchSimilarFilms} from '../actions/api-actions.ts';
import {AllFetchFilmInfo, FetchFilm, FetchFilms, FetchReviews} from '../../types/state.ts';

describe('FilmProcess Slice', () => {

  it('should return initial state with empty action', () => {
    const expectedState = makeFakeAllFetchFilmInfo();

    const result = filmProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return initial state with empty action and undefined state', () => {

    const expectedState = initialState;

    const result = filmProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" to "true", "hasError" to "false" with "fetchFilm.pending"', () => {
    const mockFilm: FetchFilm = {
      hasError: false,
      isLoading: true,
      data: initialState.film.data
    };
    const expectedState: AllFetchFilmInfo = {
      film: mockFilm,
      similarFilms: initialState.similarFilms,
      reviews: initialState.reviews,
    };

    const result = filmProcess.reducer(undefined, fetchFilm.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "film", "isLoading" to "false" with "fetchFilm.fulfilled"', () => {
    const fakeFilm = makeFakeFilm();
    const mockFilm: FetchFilm = {
      hasError: false,
      isLoading: false,
      data: fakeFilm
    };
    const expectedState: AllFetchFilmInfo = {
      film: mockFilm,
      similarFilms: initialState.similarFilms,
      reviews: initialState.reviews,
    };

    const result = filmProcess.reducer(
      undefined,
      fetchFilm.fulfilled(
        fakeFilm, '', '')
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" to "true", "hasError" to "true" with "fetchFilm.rejected', () => {
    const mockFilm: FetchFilm = {
      hasError: true,
      isLoading: false,
      data: initialState.film.data
    };
    const expectedState: AllFetchFilmInfo = {
      film: mockFilm,
      similarFilms: initialState.similarFilms,
      reviews: initialState.reviews,
    };
    const result = filmProcess.reducer(
      undefined,
      fetchFilm.rejected
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" to "true", "hasError" to "false" with "fetchReviews.pending"', () => {
    const mockReviews: FetchReviews = {
      hasError: false,
      isLoading: true,
      data: initialState.reviews.data
    };
    const expectedState: AllFetchFilmInfo = {
      film: initialState.film,
      similarFilms: initialState.similarFilms,
      reviews: mockReviews,
    };

    const result = filmProcess.reducer(undefined, fetchReviews.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "reviews", "isLoading" to "false" with "fetchReviews.fulfilled"', () => {
    const fakeReviews = makeFakeReview();
    const mockReviews: FetchReviews = {
      hasError: false,
      isLoading: false,
      data: [fakeReviews]
    };
    const expectedState: AllFetchFilmInfo = {
      film: initialState.film,
      similarFilms: initialState.similarFilms,
      reviews: mockReviews,
    };

    const result = filmProcess.reducer(
      undefined,
      fetchReviews.fulfilled(
        [fakeReviews], '', '')
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" to "true", "hasError" to "true" with "fetchReviews.rejected', () => {
    const mockReviews: FetchReviews = {
      hasError: true,
      isLoading: false,
      data: initialState.reviews.data
    };
    const expectedState: AllFetchFilmInfo = {
      film: initialState.film,
      similarFilms: initialState.similarFilms,
      reviews: mockReviews,
    };
    const result = filmProcess.reducer(
      undefined,
      fetchReviews.rejected
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" to "true", "hasError" to "false" with "fetchSimilarFilms.pending"', () => {
    const mockSimilarFilms: FetchFilms = {
      hasError: false,
      isLoading: true,
      films: initialState.similarFilms.films
    };
    const expectedState: AllFetchFilmInfo = {
      film: initialState.film,
      similarFilms: mockSimilarFilms,
      reviews: initialState.reviews,
    };

    const result = filmProcess.reducer(undefined, fetchSimilarFilms.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "similarFilms", "isLoading" to "false" with "fetchSimilarFilms.fulfilled"', () => {
    const fakeFilm = makeFakeFilmPreview();
    const mockSimilarFilms: FetchFilms = {
      hasError: false,
      isLoading: false,
      films: [fakeFilm]
    };
    const expectedState: AllFetchFilmInfo = {
      film: initialState.film,
      similarFilms: mockSimilarFilms,
      reviews: initialState.reviews,
    };

    const result = filmProcess.reducer(
      undefined,
      fetchSimilarFilms.fulfilled(
        [fakeFilm], '', '')
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" to "true", "hasError" to "true" with "fetchSimilarFilms.rejected', () => {
    const mockSimilarFilms: FetchFilms = {
      hasError: true,
      isLoading: false,
      films: initialState.similarFilms.films
    };
    const expectedState: AllFetchFilmInfo = {
      film: initialState.film,
      similarFilms: mockSimilarFilms,
      reviews: initialState.reviews,
    };

    const result = filmProcess.reducer(
      undefined,
      fetchSimilarFilms.rejected
    );

    expect(result).toEqual(expectedState);
  });
});

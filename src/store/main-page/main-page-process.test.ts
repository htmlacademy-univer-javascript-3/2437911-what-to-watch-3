import {
  emptyAction,
  makeFakeFetchAllFilms,
  makeFakeFetchFilms,
  makeFakeFetchPromoFilm,
  makeFakeFilmPreview,
  makeFakePromoFilm
} from '../../utils/mocks.ts';
import {expect} from 'vitest';
import {fetchFilms, fetchPromoFilm} from '../actions/api-actions.ts';
import {FetchAllFilms, FetchFilms, FetchPromoFilm} from '../../types/state.ts';
import {initialState, mainPageProcess, setGenre} from './main-page-process.ts';
import {Genre} from '../../consts/genre.ts';

describe('MainPage Slice', () => {

  it('should return initial state with empty action', () => {
    const expectedState = makeFakeFetchAllFilms();

    const result = mainPageProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return initial state with empty action and undefined state', () => {

    const expectedState = initialState;

    const result = mainPageProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "currentGenre" with "setGenre"', () => {
    const films = makeFakeFetchFilms();
    const promoFilm = makeFakeFetchPromoFilm();
    const genreFilms = [makeFakeFilmPreview()];
    const initState: FetchAllFilms = {
      films: films,
      promoFilm: promoFilm,
      genreFilms: genreFilms,
      currentGenre: Genre.AllGenres
    };
    const expectedState: FetchAllFilms = {
      films: films,
      promoFilm: promoFilm,
      genreFilms: [],
      currentGenre: Genre.Crime
    };

    const result = mainPageProcess.reducer(initState, setGenre(Genre.Crime));

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" to "true", "hasError" to "false" with "fetchFilms.pending"', () => {
    const mockFilm: FetchFilms = {
      hasError: false,
      isLoading: true,
      films: initialState.films.films
    };
    const expectedState: FetchAllFilms = {
      films: mockFilm,
      promoFilm: initialState.promoFilm,
      genreFilms: initialState.genreFilms,
      currentGenre: Genre.AllGenres
    };

    const result = mainPageProcess.reducer(undefined, fetchFilms.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "films" and "genreFilms", "isLoading" to "false" with "fetchFilms.fulfilled"', () => {
    const fakeFilms = makeFakeFetchFilms();
    const mockFilm: FetchFilms = {
      hasError: false,
      isLoading: false,
      films: fakeFilms.films
    };
    const expectedState: FetchAllFilms = {
      films: mockFilm,
      promoFilm: initialState.promoFilm,
      genreFilms: mockFilm.films,
      currentGenre: Genre.AllGenres
    };

    const result = mainPageProcess.reducer(
      undefined,
      fetchFilms.fulfilled(
        fakeFilms.films, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" to "true", "hasError" to "true" with "fetchFilms.rejected', () => {
    const mockFilm: FetchFilms = {
      hasError: true,
      isLoading: false,
      films: initialState.films.films
    };
    const expectedState: FetchAllFilms = {
      films: mockFilm,
      promoFilm: initialState.promoFilm,
      genreFilms: initialState.genreFilms,
      currentGenre: Genre.AllGenres
    };

    const result = mainPageProcess.reducer(
      undefined,
      fetchFilms.rejected
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" to "true", "hasError" to "false" with "fetchPromoFilm.pending"', () => {
    const mockPromoFilm: FetchPromoFilm = {
      data: initialState.promoFilm.data,
      isLoading: true,
      hasError: false
    };
    const expectedState: FetchAllFilms = {
      films: initialState.films,
      promoFilm: mockPromoFilm,
      genreFilms: initialState.genreFilms,
      currentGenre: Genre.AllGenres
    };

    const result = mainPageProcess.reducer(undefined, fetchPromoFilm.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "promoFilm", "isLoading" to "false" with "fetchPromoFilm.fulfilled"', () => {
    const fakePromoFilm = makeFakePromoFilm();
    const mockPromoFilm: FetchPromoFilm = {
      data: fakePromoFilm,
      isLoading: false,
      hasError: false
    };
    const expectedState: FetchAllFilms = {
      films: initialState.films,
      promoFilm: mockPromoFilm,
      genreFilms: initialState.genreFilms,
      currentGenre: Genre.AllGenres
    };

    const result = mainPageProcess.reducer(
      undefined,
      fetchPromoFilm.fulfilled(
        fakePromoFilm, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" to "true", "hasError" to "true" with "fetchPromoFilm.rejected', () => {
    const mockPromoFilm: FetchPromoFilm = {
      data: initialState.promoFilm.data,
      isLoading: false,
      hasError: true
    };
    const expectedState: FetchAllFilms = {
      films: initialState.films,
      promoFilm: mockPromoFilm,
      genreFilms: initialState.genreFilms,
      currentGenre: Genre.AllGenres
    };
    const result = mainPageProcess.reducer(
      undefined,
      fetchPromoFilm.rejected
    );

    expect(result).toEqual(expectedState);
  });
});

import {emptyAction, makeFakeFetchFilms, makeFakeMyListInfo} from '../../utils/mocks.ts';
import {expect} from 'vitest';
import {fetchFavoriteFilms} from '../actions/api-actions.ts';
import {FetchFilms, MyListInfo} from '../../types/state.ts';
import {initialState, myListProcess} from './my-list-page-process.ts';

describe('MyListPageProcess Slice', () => {

  it('should return initial state with empty action', () => {
    const expectedState = makeFakeMyListInfo();

    const result = myListProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return initial state with empty action and undefined state', () => {

    const expectedState = initialState;

    const result = myListProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" to "true", "hasError" to "false" with "fetchFavoriteFilms.pending"', () => {
    const mockFilms: FetchFilms = {
      hasError: false,
      isLoading: true,
      films: initialState.films.films
    };
    const expectedState: MyListInfo = {
      films: mockFilms
    };

    const result = myListProcess.reducer(undefined, fetchFavoriteFilms.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "films", "isLoading" to "false" with "fetchFavoriteFilms.fulfilled"', () => {
    const fakeFilm = makeFakeFetchFilms();
    const mockFilms: FetchFilms = {
      hasError: false,
      isLoading: false,
      films: fakeFilm.films
    };
    const expectedState: MyListInfo = {
      films: mockFilms
    };

    const result = myListProcess.reducer(
      undefined,
      fetchFavoriteFilms.fulfilled(
        fakeFilm.films, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" to "true", "hasError" to "true" with "fetchFavoriteFilms.rejected', () => {
    const mockFilms: FetchFilms = {
      hasError: true,
      isLoading: false,
      films: initialState.films.films
    };
    const expectedState: MyListInfo = {
      films: mockFilms
    };
    const result = myListProcess.reducer(
      undefined,
      fetchFavoriteFilms.rejected
    );

    expect(result).toEqual(expectedState);
  });
});

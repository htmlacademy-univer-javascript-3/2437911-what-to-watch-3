import {NameSpace} from '../../consts/namespace.ts';
import {getFavoriteFilms} from './selectors.ts';
import {makeFakeMyListInfo} from '../../utils/mocks.ts';

describe('MyListProcess selectors', () => {
  const state = {
    [NameSpace.MyList]: makeFakeMyListInfo()
  };

  it('should return favorite films from state', () => {
    const {films} = state[NameSpace.MyList];
    const result = getFavoriteFilms(state);
    expect(result).toBe(films);
  });
});

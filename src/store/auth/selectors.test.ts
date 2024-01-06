import {NameSpace} from '../../consts/namespace.ts';
import {makeFakeUserProcess} from '../../utils/mocks.ts';
import {getAuthError, getAuthStatus} from './selectors.ts';

describe('AuthProcess selectors', () => {
  const state = {
    [NameSpace.Auth]: makeFakeUserProcess()
  };

  it('should return error from state', () => {
    const {error} = state[NameSpace.Auth];
    const result = getAuthError(state);
    expect(result).toBe(error);
  });

  it('should return authorizationStatus from state', () => {
    const {authorizationStatus} = state[NameSpace.Auth];
    const result = getAuthStatus(state);
    expect(result).toBe(authorizationStatus);
  });
});

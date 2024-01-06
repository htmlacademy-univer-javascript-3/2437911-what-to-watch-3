import {AuthorizationStatus} from '../../consts/authorization-status.ts';
import {authProcess, setSignInError} from './auth-process.ts';
import {checkAuthAction, loginAction, logoutAction} from '../actions/api-actions.ts';
import {emptyAction} from '../../utils/mocks.ts';

describe('AuthProcess Slice', () => {
  it('should set error with setSignInError', () => {
    const expectedState = {authorizationStatus: AuthorizationStatus.Unknown, error: 'super error'};

    const result = authProcess.reducer(expectedState, setSignInError('super error'));

    expect(result).toEqual(expectedState);
  });

  it('should return initial state with empty action', () => {
    const expectedState = {authorizationStatus: AuthorizationStatus.Auth};

    const result = authProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const expectedState = {authorizationStatus: AuthorizationStatus.Unknown};

    const result = authProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "Auth" with "checkAuthAction.fulfilled" action', () => {
    const initialState = {authorizationStatus: AuthorizationStatus.NoAuth};
    const expectedState = {authorizationStatus: AuthorizationStatus.Auth};

    const result = authProcess.reducer(initialState, checkAuthAction.fulfilled);

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" with "checkAuthAction.rejected" action', () => {
    const initialState = {authorizationStatus: AuthorizationStatus.Auth};
    const expectedState = {authorizationStatus: AuthorizationStatus.NoAuth};

    const result = authProcess.reducer(initialState, checkAuthAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "Auth" with "loginAction.fulfilled" action', () => {
    const initialState = {authorizationStatus: AuthorizationStatus.NoAuth};
    const expectedState = {authorizationStatus: AuthorizationStatus.Auth};

    const result = authProcess.reducer(initialState, loginAction.fulfilled);

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" with "loginAction.rejected" action', () => {
    const initialState = {authorizationStatus: AuthorizationStatus.Auth};
    const expectedState = {authorizationStatus: AuthorizationStatus.NoAuth};

    const result = authProcess.reducer(initialState, loginAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth", with "logoutAction.fulfilled" action', () => {
    const initialState = {authorizationStatus: AuthorizationStatus.Auth};
    const expectedState = {authorizationStatus: AuthorizationStatus.NoAuth};

    const result = authProcess.reducer(initialState, logoutAction.fulfilled);

    expect(result).toEqual(expectedState);
  });
});

import {NameSpace} from '../../consts/namespace.ts';
import {State} from '../../types/state.ts';

export const getAuthStatus = (state: Pick<State, NameSpace.Auth>) => state[NameSpace.Auth].authorizationStatus;

export const getAuthError = (state: Pick<State, NameSpace.Auth>) => state[NameSpace.Auth].error;


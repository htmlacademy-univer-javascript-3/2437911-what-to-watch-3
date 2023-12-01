import {NameSpace} from '../../consts/namespace.ts';
import {State} from '../../types/state.ts';

export const getAuthStatus = (state: State) => state[NameSpace.Auth].authorizationStatus;

export const getAuthError = (state: State) => state[NameSpace.Auth].error;


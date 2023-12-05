import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserProcess} from '../../types/state.ts';
import {checkAuthAction, loginAction, logoutAction} from '../actions/api-actions.ts';
import {AuthorizationStatus} from '../../consts/authorization-status.ts';
import {NameSpace} from '../../consts/namespace.ts';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  error: undefined
};

export const authProcess = createSlice({
  name: NameSpace.Auth,
  initialState,
  reducers: {
    setSignInError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});

export const {setSignInError} = authProcess.actions;

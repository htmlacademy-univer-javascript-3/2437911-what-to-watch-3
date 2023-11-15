import {createApi} from '../api/api.ts';
import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer.ts';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {State} from '../types/state.ts';

const api = createApi();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
});

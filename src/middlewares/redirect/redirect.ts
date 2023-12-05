import {PayloadAction} from '@reduxjs/toolkit';
import {Middleware} from 'redux';
import {reducer} from '../../store/reducer/reducer.ts';
import browserHistory from '../../browser-history/browser-history.ts';

type Reducer = ReturnType<typeof reducer>;
export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'app/redirectToRoute') {
          browserHistory.push(action.payload);
        }
        return next(action);
      };

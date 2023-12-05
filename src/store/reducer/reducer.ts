import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts/namespace.ts';
import {authProcess} from '../auth/auth-process.ts';
import {filmProcess} from '../film/film-process.ts';
import {mainPageProcess} from '../main-page/main-page-process.ts';
import {myListProcess} from '../my-list/my-list-page-process.ts';

export const reducer = combineReducers({
  [NameSpace.Auth]: authProcess.reducer,
  [NameSpace.Film]: filmProcess.reducer,
  [NameSpace.MainPage]: mainPageProcess.reducer,
  [NameSpace.MyList]: myListProcess.reducer
});

import {State} from '../../types/state.ts';
import {NameSpace} from '../../consts/namespace.ts';

export const getFavoriteFilms = (state: State) => state[NameSpace.MyList].films;

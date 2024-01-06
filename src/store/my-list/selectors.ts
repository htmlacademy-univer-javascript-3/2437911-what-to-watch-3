import {State} from '../../types/state.ts';
import {NameSpace} from '../../consts/namespace.ts';

export const getFavoriteFilms = (state: Pick<State, NameSpace.MyList>) => state[NameSpace.MyList].films;

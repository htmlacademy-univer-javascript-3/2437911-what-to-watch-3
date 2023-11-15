import {JSX} from 'react';
import {Genre} from '../consts/genre.ts';
import {setCurrentGenre} from '../store/actions.ts';
import classNames from 'classnames';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../types/state.ts';
import {useAppSelector} from '../store';
import {getGenres} from '../functions/getGenres.ts';

type GenreListProps = {
  onClickAction?: () => void;
}

function GenresList({onClickAction}: GenreListProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const currentGenre = useAppSelector((state) => state.currentGenre);
  const films = useAppSelector((state) => state.films);
  const genres: Genre[] = getGenres(films);

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) =>
          (
            <li key={genre} className={classNames('catalog__genres-item',
              {'catalog__genres-item--active': currentGenre === genre})}
            >
              <nav className="catalog__genres-link"
                onClick={() => {
                  onClickAction?.();
                  dispatch(setCurrentGenre(genre));
                }}
              >{genre}
              </nav>
            </li>
          ))
      }
    </ul>
  );
}

export default GenresList;

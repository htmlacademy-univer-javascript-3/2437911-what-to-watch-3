import {JSX} from 'react';
import {Genre} from '../consts/genre.ts';
import classNames from 'classnames';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../types/state.ts';
import {useAppSelector} from '../store';
import {getGenres} from '../functions/getGenres.ts';
import {getFilms, getGenre} from '../store/main-page/selectors.ts';
import {setGenre} from '../store/main-page/main-page-process.ts';

type GenreListProps = {
    onClickAction?: () => void;
}

function GenresList({onClickAction}: GenreListProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const currentGenre = useAppSelector(getGenre);
  const fetchFilms = useAppSelector(getFilms);
  const genres: Genre[] = getGenres(fetchFilms.films);

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
                  dispatch(setGenre(genre));
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

import {JSX} from 'react';
import {Genres} from '../consts/Genres.ts';
import {setAllGenreAction, setSpecificGenreAction} from '../store/actions.ts';
import classNames from 'classnames';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../types/state.ts';
import {useAppSelector} from '../index.tsx';

type GenreListProps = {
  onClickAction?: () => void;
}

function GenresList({onClickAction}: GenreListProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const currentGenre = useAppSelector((state) => state.activeGenre);
  const genres: Genres[] = useAppSelector((state) => state.allGenres);

  return (
    <ul className="catalog__genres-list">
      <li
        className={classNames('catalog__genres-item',
          {'catalog__genres-item--active': currentGenre === Genres.AllGenres})}
      >

        <nav className="catalog__genres-link"
          onClick={() => {
            onClickAction?.();
            dispatch(setAllGenreAction());
          }}
        >
          {Genres.AllGenres}
        </nav>
      </li>

      {
        genres.map((genre) =>
          (
            <li key={genre} className={classNames('catalog__genres-item',
              {'catalog__genres-item--active': currentGenre === genre})}
            >
              <nav className="catalog__genres-link"
                onClick={() => {
                  onClickAction?.();
                  dispatch(setSpecificGenreAction(genre));
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

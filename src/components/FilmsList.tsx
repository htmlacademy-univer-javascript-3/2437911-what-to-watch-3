import {JSX, useState} from 'react';
import {FilmPreview} from '../types/film-data.ts';
import CatalogFilmCard from './CatalogFilmCard.tsx';

type FilmListProps = {
  films: FilmPreview[];
};

function FilmsList({films}: FilmListProps): JSX.Element {
  const [selectFilmId, setSelectFilmId] = useState<string | undefined>();

  return (
    <div className="catalog__films-list">
      {
        films.map((film) => (
          <CatalogFilmCard film={film} key={film.id}
            isPlaying={film.id === selectFilmId}
            setSelectedFilm={setSelectFilmId}
          />
        ))
      }
    </div>
  );
}

export default FilmsList;

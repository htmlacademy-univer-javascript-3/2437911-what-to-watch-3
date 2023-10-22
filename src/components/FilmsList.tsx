import {JSX, useState} from 'react';
import {FilmData} from '../types/FilmData.ts';
import CatalogFilmCard from './CatalogFilmCard.tsx';

type FilmListProps = {
  films: FilmData[];
};

function FilmsList({films}: FilmListProps): JSX.Element {
  const [, setId] = useState<number | undefined>();

  return (
    <div className="catalog__films-list">
      {
        films.map((film) => (
          <CatalogFilmCard id={film.id} title={film.title} listImage={film.listImage} key={film.id}
            onMouseEnter={() => setId(film.id)}
            onMouseLeave={() => setId(undefined)}
          />
        ))
      }
    </div>
  );
}

export default FilmsList;

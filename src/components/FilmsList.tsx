import {JSX, useState} from 'react';
import {FilmData} from '../types/filmData.ts';
import CatalogFilmCard from './CatalogFilmCard.tsx';

type FilmListProps = {
  films: FilmData[];
};

function FilmsList({films}: FilmListProps): JSX.Element {
  const [selectFilmId, setSelectFilmId] = useState<number | undefined>();

  return (
    <div className="catalog__films-list">
      {
        films.map((film) => (
          <CatalogFilmCard film={film} key={film.id}
            videoSrc={film.videoSrc}
            isPlaying={film.id === selectFilmId}
            setSelectedFilm={setSelectFilmId}
          />
        ))
      }
    </div>
  );
}

export default FilmsList;

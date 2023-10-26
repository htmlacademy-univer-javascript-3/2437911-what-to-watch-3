import {JSX, useState} from 'react';
import {FilmTypes} from '../types/filmTypes.ts';
import CatalogFilmCard from './CatalogFilmCard.tsx';

type FilmListProps = {
  films: FilmTypes[];
};

function FilmsList({films}: FilmListProps): JSX.Element {
  const [selectFilmId, setSelectFilmId] = useState<number | undefined>();

  let lastSelectedFilm: number | undefined = undefined;

  function setSelectedFilm(id: number | undefined) {
    lastSelectedFilm = id;

    if (id !== undefined) {
      setTimeout(() => {
        if (lastSelectedFilm === id) {
          setSelectFilmId(id);
        }
      }, 1000);
    } else {
      setSelectFilmId(id);
    }

  }

  return (
    <div className="catalog__films-list">
      {
        films.map((film) => (
          <CatalogFilmCard film={film} key={film.id}
            videoSrc={film.videoSrc}
            isPlaying={film.id === selectFilmId}
            setSelectedFilm={setSelectedFilm}
          />
        ))
      }
    </div>
  );
}

export default FilmsList;

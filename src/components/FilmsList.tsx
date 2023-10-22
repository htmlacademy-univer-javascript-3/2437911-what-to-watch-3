import {JSX, useState} from 'react';
import {FilmData} from '../types/FilmData.ts';
import CatalogFilmCard from './CatalogFilmCard.tsx';

type FilmListProps = {
  films: FilmData[];
};

function FilmsList({films}: FilmListProps): JSX.Element {
  const [selectFilmId, setSelectFilmId] = useState<number | undefined>();
  let selectedId: number | undefined = undefined;

  return (
    <div className="catalog__films-list">
      {
        films.map((film) => (
          <CatalogFilmCard id={film.id} title={film.title} listImage={film.listImage} key={film.id}
            videoSrc={film.videoSrc}
            isPlaying={film.id === selectFilmId}
            onMouseEnter={() => {
              selectedId = film.id;
              setTimeout(() => {
                if (selectedId === film.id) {
                  setSelectFilmId(film.id);
                }
              }, 1000);
            }}
            onMouseLeave={() => {
              selectedId = undefined;
              setSelectFilmId(undefined);
            }}
          />
        ))
      }
    </div>
  );
}

export default FilmsList;

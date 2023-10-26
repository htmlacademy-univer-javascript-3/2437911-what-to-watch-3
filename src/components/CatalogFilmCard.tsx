import {JSX} from 'react';
import {FilmPreview} from '../types/filmTypes.ts';
import VideoPlayer from './VideoPlayer.tsx';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../consts/AppRoutes.ts';

export type CatalogFilmCardProp = {
  film: FilmPreview;
  videoSrc: string;
  isPlaying: boolean;
  setSelectedFilm: (id: number | undefined) => void;
};

function CatalogFilmCard({
  film,
  videoSrc,
  isPlaying,
  setSelectedFilm,
}: CatalogFilmCardProp): JSX.Element {
  const {id, title, listImage} = film;

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => setSelectedFilm(id)}
      onMouseLeave={() => setSelectedFilm(undefined)}
    >

      <VideoPlayer videoSrc={videoSrc} posterSrc={listImage} className="small-film-card__image" isMuted
        isPlaying={isPlaying} width="280" height="175"
      />

      <h3 className="small-film-card__title">
        <Link to={`${AppRoutes.Film(id)}`} className="small-film-card__link">{title}</Link>
      </h3>
    </article>
  );
}

export default CatalogFilmCard;

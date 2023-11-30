import {JSX} from 'react';
import {FilmPreview} from '../types/film-data.ts';
import VideoPlayer from './VideoPlayer.tsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../consts/app-route.ts';

export type CatalogFilmCardProp = {
  film: FilmPreview;
  isPlaying: boolean;
  setSelectedFilm: (id?: string) => void;
};

function CatalogFilmCard({
  film,
  isPlaying,
  setSelectedFilm,
}: CatalogFilmCardProp): JSX.Element {
  const {id, name, previewImage, previewVideoLink} = film;

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => setSelectedFilm(id)}
      onMouseLeave={() => setSelectedFilm()}
    >

      <Link to={`${AppRoute.Film(id)}`}>
        <VideoPlayer videoSrc={previewVideoLink} posterSrc={previewImage} className="small-film-card__image" isMuted
          isPlaying={isPlaying} width="280" height="175"
        />
      </Link>

      <h3 className="small-film-card__title">
        <Link to={`${AppRoute.Film(id)}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

export default CatalogFilmCard;

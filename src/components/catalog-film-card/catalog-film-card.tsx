import {JSX, memo} from 'react';
import {FilmPreview} from '../../types/film-data.ts';
import MiniVideoPlayer from '../mini-video-player/mini-video-player.tsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts/app-route.ts';

export type CatalogFilmCardProp = {
  film: FilmPreview;
  isPlaying: boolean;
  onSetSelectedFilm: (id?: string) => void;
};

const VIDEO_PLAY_DELAY = 1000;

export function CatalogFilmCard({
  film,
  isPlaying,
  onSetSelectedFilm,
}: CatalogFilmCardProp): JSX.Element {
  const {id, name, previewImage, previewVideoLink} = film;

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => onSetSelectedFilm(id)}
      onMouseLeave={() => onSetSelectedFilm()}
    >

      <Link to={`${AppRoute.Film(id)}`}>
        <MiniVideoPlayer videoSrc={previewVideoLink} posterSrc={previewImage} className="small-film-card__image"
          isMuted
          isPlaying={isPlaying} width="280" height="175" videoPlayDelay={VIDEO_PLAY_DELAY}
        />
      </Link>

      <h3 className="small-film-card__title">
        <Link to={`${AppRoute.Film(id)}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

export default memo(CatalogFilmCard);

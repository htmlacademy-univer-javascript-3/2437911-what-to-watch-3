import {JSX, MouseEventHandler} from 'react';
import {FilmPreview} from '../types/FilmData.ts';
import VideoPlayer from './VideoPlayer.tsx';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../consts/AppRoutes.ts';
import {imageDirectory} from '../consts/SrcPath.ts';

export type CatalogFilmCardProp = FilmPreview & {
  videoSrc: string;
  isPlaying: boolean;
  onMouseEnter: MouseEventHandler<HTMLElement> | undefined;
  onMouseLeave: MouseEventHandler<HTMLElement> | undefined;
};

function CatalogFilmCard({
  id,
  title,
  listImage,
  videoSrc,
  isPlaying,
  onMouseEnter,
  onMouseLeave
}: CatalogFilmCardProp): JSX.Element {

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>

      {isPlaying && <VideoPlayer videoSrc={videoSrc} isMuted isPlaying={isPlaying} width="280" height="175"/>}

      {!isPlaying && (
        <div className="small-film-card__image">
          <img src={`${imageDirectory}/${listImage}`} alt={title} width="280" height="175"/>
        </div>
      )}

      <h3 className="small-film-card__title">
        <Link to={`${AppRoutes.Film(id)}`} className="small-film-card__link">{title}</Link>
      </h3>
    </article>
  );
}

export default CatalogFilmCard;

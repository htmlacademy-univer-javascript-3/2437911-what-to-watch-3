import {JSX, MouseEventHandler} from 'react';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../consts/AppRoutes.ts';
import {imageDirectory} from '../consts/SrcPath.ts';
import {FilmPreview} from '../types/FilmData.ts';

export type CatalogFilmCardProp = FilmPreview & {
  onMouseEnter: MouseEventHandler<HTMLElement> | undefined;
  onMouseLeave: MouseEventHandler<HTMLElement> | undefined;
};

function CatalogFilmCard({
  id,
  title,
  listImage,
  onMouseEnter,
  onMouseLeave
}: CatalogFilmCardProp): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="small-film-card__image">
        <img src={`${imageDirectory}/${listImage}`} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link to={`${AppRoutes.Film(id)}`} className="small-film-card__link">{title}</Link>
      </h3>
    </article>
  );
}

export default CatalogFilmCard;

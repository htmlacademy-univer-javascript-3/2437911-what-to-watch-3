import {JSX, memo} from 'react';
import FilmCardPanel from './FilmCardPanel.tsx';
import WTWLogo from './WTWLogo.tsx';
import UserBlock from './UserBlock.tsx';
import {defaultBackground} from '../consts/src-path.ts';
import {PromoFilm} from '../types/film-data.ts';

type PromoFilmCardProps = & {
    film?: PromoFilm;
    fullInfoShow: boolean;
};

function PromoFilmCard({film, fullInfoShow}: PromoFilmCardProps): JSX.Element {

  return (
    <section className="film-card">
      <div className="film-card__bg">
        {film && fullInfoShow
          ? <img src={film.backgroundImage} alt={film.name}/>
          : <img src={defaultBackground} alt='background-image'/>}
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <WTWLogo isLight={false}/>
        <UserBlock/>
      </header>

      {film && fullInfoShow && (
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={film.posterImage} alt={film.name} width="218" height="327"/>
            </div>

            <FilmCardPanel film={film} hasReviewButton={false}/>
          </div>
        </div>
      )}
    </section>
  );
}

export default memo(PromoFilmCard);

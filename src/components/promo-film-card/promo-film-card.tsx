import {JSX, memo} from 'react';
import FilmCardPanel from '../film-card-panel/film-card-panel.tsx';
import WtwLogo from '../wtw-logo/wtw-logo.tsx';
import UserBlock from '../user-block/user-block.tsx';
import {DEFAULT_BACKGROUND} from '../../consts/src-path.ts';
import {PromoFilm} from '../../types/film-data.ts';

type PromoFilmCardProps = & {
  film?: PromoFilm;
  fullInfoShow: boolean;
};

export function PromoFilmCard({film, fullInfoShow}: PromoFilmCardProps): JSX.Element {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        {film && fullInfoShow
          ? <img src={film.backgroundImage} alt={film.name}/>
          : <img src={DEFAULT_BACKGROUND} alt='background-image'/>}
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <WtwLogo isLight={false}/>
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

const PromoFilmCardMemo = memo(PromoFilmCard);

export default PromoFilmCardMemo;

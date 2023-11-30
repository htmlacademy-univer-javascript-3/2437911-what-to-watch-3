import {JSX} from 'react';
import FilmCardPanel from './FilmCardPanel.tsx';
import WTWLogo from './WTWLogo.tsx';
import UserBlock from './UserBlock.tsx';
import {AuthorizationStatus} from '../consts/authorization-status.ts';
import {defaultBackground} from '../consts/src-path.ts';
import {PromoFilm} from '../types/film-data.ts';
import {useAppSelector} from '../store';

type PromoFIlmCardProps = & {
  film: PromoFilm;
};

function PromoFilmCard({film}: PromoFIlmCardProps): JSX.Element {
  const {name, backgroundImage, posterImage} = film;
  const authStatus = useAppSelector((state) => state.authStatus);
  const isAuth = authStatus === AuthorizationStatus.Auth;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        {isAuth
          ? <img src={backgroundImage} alt={name}/>
          : <img src={defaultBackground} alt='background-image'/>}
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <WTWLogo isLight={false}/>
        <UserBlock/>
      </header>

      {isAuth && (
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={name} width="218" height="327"/>
            </div>

            <FilmCardPanel film={film} hasReviewButton={false}/>
          </div>
        </div>
      )}
    </section>
  );
}

export default PromoFilmCard;
